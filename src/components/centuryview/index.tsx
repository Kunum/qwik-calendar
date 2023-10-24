import { CSSProperties, component$, PropFunction, Slot, useStyles$ } from "@builder.io/qwik";

import { getFirstYearOfTheCentury, calculateDecade, getFirstYearOfTheDecade } from "../../utils";

import css from "./centuryview.module.css?inline";

interface DecadeProps{
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    currentYearColor?: string,
    styles?: CSSProperties
}

const Decade = component$((props: DecadeProps) => {
    const thisDate = new Date(props.dateObj);
    const currentDate = new Date();

    const thisDecadeYear = thisDate.getFullYear()
    const currentYear = currentDate.getFullYear();

    const currentDecadeColor = props.currentYearColor ? props.currentYearColor : "#ffff76";

    // is there a better way to do this?
    const backgroundColor = (currentYear >= getFirstYearOfTheDecade(thisDecadeYear) && currentYear <= (getFirstYearOfTheDecade(thisDecadeYear) + 9))
        ? currentDecadeColor : "transparent";

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
                props.onChangeCurrentView$("decade");
            }}>
            <Slot/>
        </button>
    );
});

export interface CenturyViewProps {
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    styles?: CSSProperties,
    decadeStyles?: CSSProperties,
    currentYearBgColor?: string
}

export const CenturyView = component$((props: CenturyViewProps) => {
    useStyles$(css);

    const baseDate = new Date(props.dateObj);
    const firstYearOfTheCentury = getFirstYearOfTheCentury(baseDate.getFullYear());

    const anos = [];

    for (let ano = firstYearOfTheCentury; ano <= firstYearOfTheCentury + 99; ano += 10){
        baseDate.setFullYear(ano);

        anos.push(
            <Decade
                dateObj={baseDate.valueOf()}
                styles={props.decadeStyles}
                currentYearColor={props.currentYearBgColor}
                onChangeCurrentDate$={props.onChangeCurrentDate$}
                onChangeCurrentView$={props.onChangeCurrentView$}
                key={ano}
            >
                {calculateDecade(ano)}
            </Decade>
        )
    }

    return (
      <>
          <div qc-comp-id="centuryview" style={{display: "flex", flexWrap: "wrap", ...props.styles}}>
            {anos}
          </div>  
      </>
    );
});
