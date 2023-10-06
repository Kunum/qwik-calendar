import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import css from "./weekdays.module.css?inline";

import { weekdays } from "../../locale";

const WeekDay = component$((props) => {
    useStyles$(css);

    return (
        <div class={css.weekday}>
            <abbr aria-label={props.label} title={props.label}>
                <Slot/>
            </abbr>
        </div>
    );
});

export const WeekDays = component$((props) => {

    let daysOfTheWeek = weekdays[props.locale];

    return (
        <>
            <div id={css.weekdays}>
                <WeekDay label={daysOfTheWeek[0]}>{daysOfTheWeek[0].slice(0, 3)}</WeekDay>
                <WeekDay label={daysOfTheWeek[1]}>{daysOfTheWeek[1].slice(0, 3)}</WeekDay>
                <WeekDay label={daysOfTheWeek[2]}>{daysOfTheWeek[2].slice(0, 3)}</WeekDay>
                <WeekDay label={daysOfTheWeek[3]}>{daysOfTheWeek[3].slice(0, 3)}</WeekDay>
                <WeekDay label={daysOfTheWeek[4]}>{daysOfTheWeek[4].slice(0, 3)}</WeekDay>
                <WeekDay label={daysOfTheWeek[5]}>{daysOfTheWeek[5].slice(0, 3)}</WeekDay>
                <WeekDay label={daysOfTheWeek[6]}>{daysOfTheWeek[6].slice(0, 3)}</WeekDay>
            </div>
        </>
    );
});
