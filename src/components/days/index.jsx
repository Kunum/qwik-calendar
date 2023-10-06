import { component$, useStyles$ } from "@builder.io/qwik";

import css from "./days.module.css?inline";

const Day = component$((props) => {
    useStyles$(css);

    const thisDate = new Date(props.dateObj);
    const today = new Date();

    let textColor = thisDate.getDay() === 0 || thisDate.getDay() === 6 ? "#d10000" : "#000000";
    
    let bgColor = Math.round(props.dateObj / 8.64e7) === Math.round(today.valueOf() / 8.64e7) ? "#FFFF76" : "transparent"

    return (
        <>
            <button class={css.day} style={{color: textColor, backgroundColor: bgColor}}
                onClick$={() => {props.onClickDay$(thisDate)}}>
                <abbr>{thisDate.getDate()}</abbr>
            </button>
        </>
    );
});

const PriorDay = component$((props) => {
    const thisDate = new Date(props.dateObj);

    return (
        <>
            <button disabled class={css.priorDay}>
                <abbr>{thisDate.getDate()}</abbr>
            </button>
        </>
    );
})

function getDaysSinceLastSunday(dateObj){
    let days = [];

    while (dateObj.getDay() !== 0){
        dateObj.setDate(dateObj.getDate() - 1);
        days.unshift(<PriorDay key={dateObj.valueOf()} dateObj={dateObj.valueOf()}/>);
    }
    
    return days;
}

function getMonthLength(dateObj){
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;

    return new Date(year, month, 0).getDate();
}

function getDaysOfTheMonth(dateObj, callback){
    let days = [];

    let lens = getMonthLength(dateObj)

    for (let i = 0; i < lens; i++){
        days.push(<Day key={dateObj.valueOf()} dateObj={dateObj.valueOf()} onClickDay$={callback}/>);
        dateObj.setDate(dateObj.getDate() + 1);
    }

    return days;
}

function getDaysUntilNextSaturday(dateObj){
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();

    let newDateObj = new Date(year, month, 0);

    let days = [];

    let delta = 6 - newDateObj.getDay();
    
    for (let i = 0; i < delta; i++){
        newDateObj.setDate(newDateObj.getDate() + 1);
        days.push(<PriorDay key={newDateObj.valueOf()} dateObj={newDateObj.valueOf()}/>);
    }

    return days;
}

export const Days = component$((props) => {
    let newDate = new Date(props.dateObj);
    newDate.setDate(1);
    let daysSinceLastSunday = getDaysSinceLastSunday(newDate);
    
    newDate = new Date(props.dateObj);
    newDate.setDate(1);
    let daysOfTheMonth = getDaysOfTheMonth(newDate, props.onClickDay$);
    
    let daysUntilNextSaturday = getDaysUntilNextSaturday(newDate);

    let days = [...daysSinceLastSunday, ...daysOfTheMonth, ...daysUntilNextSaturday];

    return (
        <>
            <div id={css.days}>
                {days}
            </div>
        </>
    );
});
