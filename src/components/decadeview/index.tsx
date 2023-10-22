import { CSSProperties, component$, PropFunction, Slot, useStyles$ } from "@builder.io/qwik";

import css from "./decadeview.module.css?inline";

import { getFirstYearOfTheDecade } from "../../utils";

interface YearProps{
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    currentYearColor?: string,
    styles?: CSSProperties
}

const Year = component$((props: YearProps) => {
    const thisDate = new Date(props.dateObj);
    const currentDate = new Date();

    const currentMonthColor = props.currentYearColor ? props.currentYearColor : "#ffff76";

    const backgroundColor = (thisDate.getFullYear() === currentDate.getFullYear())
        ? currentMonthColor : "transparent";

    return (
        <button qc-comp-id="tile" style={{
            flex:"0 0 33.3333%", 
            overflow: "hidden", 
            marginInlineEnd: "0px",
            backgroundColor: backgroundColor,
            ...props.styles
        }}
            onClick$={() => {
                props.onChangeCurrentDate$(thisDate.valueOf());
                props.onChangeCurrentView$("year");
            }}>
            <Slot/>
        </button>
    );
});

export interface DecadeViewProps {
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    styles?: CSSProperties,
    yearStyles?: CSSProperties,
    currentYearBgColor?: string
}

export const DecadeView = component$((props: DecadeViewProps) => {
    useStyles$(css);

    const baseDate = new Date(props.dateObj);
    const firstYearOfTheDecade = getFirstYearOfTheDecade(baseDate.getFullYear());

    const anos = [];

    for (let ano = firstYearOfTheDecade; ano <= firstYearOfTheDecade + 9; ano++){
        baseDate.setFullYear(ano);

        anos.push(
            <Year
                dateObj={baseDate.valueOf()}
                styles={props.yearStyles}
                currentYearColor={props.currentYearBgColor}
                onChangeCurrentDate$={props.onChangeCurrentDate$}
                onChangeCurrentView$={props.onChangeCurrentView$}
            >
                {ano}
            </Year>
        )
    }

    return (
      <>
          <div qc-comp-id="decadeview" style={{display: "flex", flexWrap: "wrap", ...props.styles}}>
            {anos}
          </div>  
      </>
    );
});
