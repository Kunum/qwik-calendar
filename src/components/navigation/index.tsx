import { CSSProperties, PropFunction, component$, useComputed$, useStyles$ } from "@builder.io/qwik";

import css from "./navigation.module.css?inline";

import { calculateDecade, capitalizeFirstLetter } from "../../utils";

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

    const month = useComputed$(() => {
        return new Date(props.dateObj).toLocaleString(props.locale, {month: 'long'});
    });

    const year = useComputed$(() => {
        return new Date(props.dateObj).getFullYear();
    })
    
    //
    
    if (props.view === "month"){
        return (
            <>
                <div qc-comp-id="navigation" style={props.styles}>
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value - 1);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        «
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value, newDate.getMonth() - 1);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        ‹   
                    </button>
    
                    <button style={{flexGrow: 1}} onClick$={() => {
                        props.onChangeCurrentView$("year");
                    }}>
                        <span>
                            {capitalizeFirstLetter(month.value)} {year.value}
                        </span>
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value, newDate.getMonth() + 1);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        ›
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value + 1);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        »
                    </button>
    
                </div>
            </>
        );
    }
    else if (props.view === "year"){
        return (
            <>
                <div qc-comp-id="navigation" style={props.styles}>
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value - 10);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        «
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value - 1);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        ‹   
                    </button>
    
                    <button style={{flexGrow: 1}} onClick$={() => {
                        props.onChangeCurrentView$("decade");
                    }}>
                        <span>
                            {year.value}
                        </span>
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value + 1);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        ›
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value + 10);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        »
                    </button>
    
                </div>
            </>
        );
    }
    else if (props.view === "decade"){
        return (
            <>
                <div qc-comp-id="navigation" style={props.styles}>
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value - 100);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        «
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value - 10);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        ‹   
                    </button>
    
                    <button style={{flexGrow: 1}} onClick$={() => {
                        props.onChangeCurrentView$("century");
                    }}>
                        <span>
                            {calculateDecade(year.value)}
                        </span>
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value + 10);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        ›
                    </button>
    
                    <button onClick$={() => {
                        const newDate = new Date(props.dateObj);
    
                        newDate.setFullYear(year.value + 100);
    
                        props.onChangeCurrentDate$(newDate.valueOf());
                    }}>
                        »
                    </button>
                </div>
            </>
        );
    }

    return <></>
    
});
