import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import css from "./weekdays.module.css?inline";

import { weekdays } from "../../locale";

export interface WeekDayProps {
    label: string
}

const WeekDay = component$((props: WeekDayProps) => {
    useStyles$(css);

    return (
        <div qc-comp-id="weekday">
            <abbr aria-label={props.label} title={props.label}>
                <Slot/>
            </abbr>
        </div>
    );
});

export interface WeekDaysProps {
    locale: string
}

export const WeekDays = component$((props: WeekDaysProps) => {
    const daysOfTheWeek = weekdays[props.locale];

    return (
        <>
            <div qc-comp-id="weekdays">
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
