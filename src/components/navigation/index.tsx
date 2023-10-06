import { PropFunction, component$, useComputed$, useSignal, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import css from "./navigation.module.css?inline";

import { capitalizeFirstLetter } from "../../utils";

export interface NavigationProps {
    locale: string,
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>
}

export const Navigation = component$((props: NavigationProps) => {
    useStyles$(css);

    const dateObj = useSignal(props.dateObj);

    const month = useComputed$(() => {
        return new Date(dateObj.value).toLocaleString(props.locale, {month: 'long'});
    });

    const year = useComputed$(() => {
        return new Date(dateObj.value).getFullYear();
    })
    
    useVisibleTask$(({ track }) => {
        track(() => dateObj.value);
        props.onChangeCurrentDate$(dateObj.value);
    });

    return (
        <>
            <div qc-comp-id="navigation">
                <button onClick$={() => {
                    const newDate = new Date(dateObj.value);

                    newDate.setFullYear(year.value - 1);

                    dateObj.value = newDate.valueOf();
                }}>
                    «
                </button>

                <button onClick$={() => {
                    const newDate = new Date(dateObj.value);

                    newDate.setFullYear(year.value, newDate.getMonth() - 1);

                    dateObj.value = newDate.valueOf();
                }}>
                    ‹   
                </button>

                <button style={{flexGrow: 1}}>
                    <span>
                        {capitalizeFirstLetter(month.value)} {year.value}
                    </span>
                </button>

                <button onClick$={() => {
                    const newDate = new Date(dateObj.value);

                    newDate.setFullYear(year.value, newDate.getMonth() + 1);

                    dateObj.value = newDate.valueOf();
                }}>
                    ›
                </button>

                <button onClick$={() => {
                    const newDate = new Date(dateObj.value);

                    newDate.setFullYear(year.value + 1);

                    dateObj.value = newDate.valueOf();
                }}>
                    »
                </button>

            </div>
        </>
    );
});
