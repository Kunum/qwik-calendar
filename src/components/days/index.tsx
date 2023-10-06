import { component$, useStyles$, PropFunction, $ } from "@builder.io/qwik";

import css from "./days.module.css?inline";

export interface DayProps{
    dateObj: number,
    onClickDay$?: PropFunction<(day: Date) => void>
}

const Day = component$((props: DayProps) => {
    useStyles$(css);

    const thisDate = new Date(props.dateObj.valueOf());
    const today = new Date();

    const textColor = thisDate.getDay() === 0 || thisDate.getDay() === 6 ? "#d10000" : "#000000";
    
    const bgColor = Math.round(props.dateObj / 8.64e7) === Math.round(today.valueOf() / 8.64e7) ? "#FFFF76" : "transparent"

    const myOnClick = $(() => {
        if (props.onClickDay$){
            props.onClickDay$(thisDate);
        }
    })


    return (
        <>
            <button qc-comp-id="day" style={{color: textColor, backgroundColor: bgColor}}
                onClick$={myOnClick}>
                <abbr>{thisDate.getDate()}</abbr>
            </button>
        </>
    );
});


export interface PriorDayProps{
    dateObj: number
}

const PriorDay = component$((props: PriorDayProps) => {
    const thisDate = new Date(props.dateObj);

    return (
        <>
            <button disabled qc-comp-id="prior-day">
                <abbr>{thisDate.getDate()}</abbr>
            </button>
        </>
    );
})

function getDaysSinceLastSunday(dateObj: Date){
    const days = [];

    while (dateObj.getDay() !== 0){
        dateObj.setDate(dateObj.getDate() - 1);
        days.unshift(<PriorDay key={dateObj.valueOf()} dateObj={dateObj.valueOf()}/>);
    }
    
    return days;
}

function getMonthLength(dateObj: Date){
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;

    return new Date(year, month, 0).getDate();
}

function getDaysUntilNextSaturday(dateObj: Date){
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();

    const newDateObj = new Date(year, month, 0);

    const days = [];

    const delta = 6 - newDateObj.getDay();
    
    for (let i = 0; i < delta; i++){
        newDateObj.setDate(newDateObj.getDate() + 1);
        days.push(<PriorDay key={newDateObj.valueOf()} dateObj={newDateObj.valueOf()}/>);
    }

    return days;
}

export interface DaysProps {
    dateObj: number,
    onClickDay$?: (day: Date) => void
}

export const Days = component$((props: DaysProps) => {
    let newDate = new Date(props.dateObj);
    newDate.setDate(1);
    const daysSinceLastSunday = getDaysSinceLastSunday(newDate);
    
    newDate = new Date(props.dateObj);
    newDate.setDate(1);

    const lens = getMonthLength(newDate);

    const daysOfTheMonth = [];

    for (let i = 0; i < lens; i++){
        daysOfTheMonth.push(<Day key={newDate.valueOf()} dateObj={newDate.valueOf()} onClickDay$={props.onClickDay$}/>);
        newDate.setDate(newDate.getDate() + 1);
    }
    
    const daysUntilNextSaturday = getDaysUntilNextSaturday(newDate);

    const days = [...daysSinceLastSunday, ...daysOfTheMonth, ...daysUntilNextSaturday];

    return (
        <>
            <div qc-comp-id="days-div">
                {days}
            </div>
        </>
    );
});
