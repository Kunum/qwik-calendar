import { component$, useStyles$, PropFunction, $, CSSProperties } from "@builder.io/qwik";

import css from "./days.module.css?inline";

export interface DayProps{
    dateObj: number,
    onClickDay$?: PropFunction<(day: Date) => void>,
    style?: CSSProperties,
    dayTextColor?: string,
    weekendTextColor?: string,
    todayBgColor?: string
}

interface DayStylingProps{
    onClickDay$?: PropFunction<(day: Date) => void>,
    style?: CSSProperties,
    dayTextColor?: string,
    weekendTextColor?: string,
    todayBgColor?: string
}

const Day = component$((props: DayProps) => {
    useStyles$(css);

    const thisDate = new Date(props.dateObj.valueOf());
    const today = new Date();

    const dayTextColor = props.dayTextColor ? props.dayTextColor : "black"; 
    const weekendTextColor = props.weekendTextColor ? props.weekendTextColor : "#d10000";
    const todayBgColor = props.todayBgColor ? props.todayBgColor : "#FFFF76";

    const textColor = thisDate.getDay() === 0 || thisDate.getDay() === 6 ? weekendTextColor : dayTextColor;
    const bgColor = Math.round(props.dateObj / 8.64e7) === Math.round(today.valueOf() / 8.64e7) ? todayBgColor : "transparent"

    const myOnClick = $(() => {
        if (props.onClickDay$){
            props.onClickDay$(thisDate);
        }
    });

    return (
        <>
            <button qc-comp-id="day" style={{color: textColor, backgroundColor: bgColor, ...props.style}}
                onClick$={myOnClick}>
                <abbr>{thisDate.getDate()}</abbr>
            </button>
        </>
    );
});


export interface PriorDayProps{
    dateObj: number,
    styles?: CSSProperties,
    show?: boolean
}

const PriorDay = component$((props: PriorDayProps) => {
    const thisDate = props.show === undefined || props.show === true ? new Date(props.dateObj).getDate() : "";

    return (
        <>
            <button disabled qc-comp-id="prior-day" style={props.styles}>
                <abbr>
                    {
                        thisDate
                    }
                </abbr>
            </button>
        </>
    );
})

function getDaysSinceLastSunday(dateObj: Date, show?: boolean, styles?: CSSProperties){
    const days = [];

    const newDateObj = new Date(dateObj.valueOf());
    newDateObj.setDate(1);

    while (newDateObj.getDay() !== 0){
        newDateObj.setDate(newDateObj.getDate() - 1);
        days.unshift(<PriorDay key={newDateObj.valueOf()} dateObj={newDateObj.valueOf()} styles={styles} show={show}/>);
    }
    
    return days;
}

function getDaysUntilNextSaturday(dateObj: Date, show?: boolean, styles?: CSSProperties){
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;

    const newDateObj = new Date(year, month, 0);
    const days = [];

    const delta = 6 - newDateObj.getDay();

    for (let i = 0; i < delta; i++){
        newDateObj.setDate(newDateObj.getDate() + 1);
        days.push(<PriorDay key={newDateObj.valueOf()} dateObj={newDateObj.valueOf()} styles={styles} show={show}/>);
    }

    return days;
}

function getMonthLength(dateObj: Date){
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;

    return new Date(year, month, 0).getDate();
}

function getMonthDays(dateObj: Date, dayProps: DayStylingProps){
    const newDate = new Date(dateObj);
    newDate.setDate(1);

    const days = [];

    const lens = getMonthLength(newDate);

    for (let i = 0; i < lens; i++){
        days.push(
            <Day 
                key={newDate.valueOf()} 
                dateObj={newDate.valueOf()} 
                onClickDay$={dayProps.onClickDay$} 
                style={dayProps.style}
                dayTextColor={dayProps.dayTextColor}
                weekendTextColor={dayProps.weekendTextColor}
                todayBgColor={dayProps.todayBgColor}
            />
        );
        newDate.setDate(newDate.getDate() + 1);
    }

    return days
}


export interface DaysProps {
    dateObj: number,
    onClickDay$?: PropFunction<(day: Date) => void>,
    styles?: CSSProperties,
    dayStyles?: CSSProperties,
    invalidDayStyles?: CSSProperties,
    dayTextColor?: string,
    weekendTextColor?: string,
    todayBgColor?: string,
    showNeighbouringMonth?: boolean
}

export const Days = component$((props: DaysProps) => {
    const newDate = new Date(props.dateObj);

    const daysSinceLastSunday = getDaysSinceLastSunday(newDate, props.showNeighbouringMonth, props.invalidDayStyles);
    
    const daysOfTheMonth = getMonthDays(newDate, 
        {
            onClickDay$:props.onClickDay$,
            style:props.dayStyles,
            dayTextColor:props.dayTextColor,
            weekendTextColor:props.weekendTextColor,
            todayBgColor:props.todayBgColor
        }
    );

    const daysUntilNextSaturday = getDaysUntilNextSaturday(newDate, props.showNeighbouringMonth, props.invalidDayStyles);

    const days = [...daysSinceLastSunday, ...daysOfTheMonth, ...daysUntilNextSaturday];

    return (
        <>
            <div qc-comp-id="days-div" style={props.styles}>
                {days}
            </div>
        </>
    );
});
