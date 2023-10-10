import { CSSProperties, PropFunction, component$, useComputed$, useSignal, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import css from "./navigation.module.css?inline";

import { capitalizeFirstLetter } from "../../utils";

export interface NavProps {
    locale: string,
    dateObj: number,
    view: string,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    styles?: CSSProperties
}

export const Navigation = component$((props: NavProps) => {
    useStyles$(css);

    const dateObj = useSignal(props.dateObj);
    const currentView = useSignal(props.view);

    console.log("onNavigation: ", currentView.value)

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

    useVisibleTask$(({track}) => {
        track(() => {currentView.value});
        props.onChangeCurrentView$(currentView.value);
    });

    if (currentView.value === "month"){
        return (
            <>
                <div qc-comp-id="navigation" style={props.styles}>
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
    
                    <button style={{flexGrow: 1}} onClick$={() => {
                        currentView.value = "year";
                    }}>
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
    }
    else if (currentView.value === "year"){
        return (
            <>
                <div qc-comp-id="navigation" style={props.styles}>
                    <button onClick$={() => {
                        const newDate = new Date(dateObj.value);
    
                        newDate.setFullYear(year.value - 10);
    
                        dateObj.value = newDate.valueOf();
                    }}>
                        «
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(dateObj.value);
    
                        newDate.setFullYear(year.value - 1);
    
                        dateObj.value = newDate.valueOf();
                    }}>
                        ‹   
                    </button>
    
                    <button style={{flexGrow: 1}} onClick$={() => {
                        currentView.value = "decade";
                    }}>
                        <span>
                            {year.value}
                        </span>
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(dateObj.value);
    
                        newDate.setFullYear(year.value + 1);
    
                        dateObj.value = newDate.valueOf();
                    }}>
                        ›
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(dateObj.value);
    
                        newDate.setFullYear(year.value + 10);
    
                        dateObj.value = newDate.valueOf();
                    }}>
                        »
                    </button>
    
                </div>
            </>
        );
    }

    return <></>
    
});
