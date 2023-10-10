import { CSSProperties, component$, useStyles$, Slot, PropFunction } from "@builder.io/qwik";

import css from "./yearview.module.css?inline";
import { capitalizeFirstLetter } from "../../utils";

interface MonthProps{
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    styles?: CSSProperties,
    currentMonthColor?: string
}

const Month = component$((props: MonthProps) => {
    const thisDate = new Date(props.dateObj);
    const currentDate = new Date();

    const currentMonthColor = props.currentMonthColor ? props.currentMonthColor : "#ffff76";

    const backgroundColor = (thisDate.getFullYear() === currentDate.getFullYear() && thisDate.getMonth() === currentDate.getMonth())
        ? currentMonthColor : "transparent";

    return (
        <button qc-comp-id="month-tile" style={{
            flex:"0 0 33.3333%", 
            overflow: "hidden", 
            marginInlineEnd: "0px",
            backgroundColor: backgroundColor,
            ...props.styles
        }}
            onClick$={() => {
                props.onChangeCurrentDate$(props.dateObj);
                props.onChangeCurrentView$("month");
            }}
        >
            <Slot/>
        </button>
    )
})

export interface YearViewProps {
    locale: string,
    dateObj: number,
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>,
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>,
    styles?: CSSProperties,
    monthStyles?: CSSProperties,
    currentMonthBgColor?: string
}
 
export const YearView = component$((props: YearViewProps) => {
    useStyles$(css);

    let months = [];

    const baseDate = new Date(props.dateObj);

    for (let month = 0; month < 12; month++){
        baseDate.setMonth(month);

        months.push(
            <Month 
                dateObj={baseDate.valueOf()} 
                key={baseDate.valueOf()}
                currentMonthColor={props.currentMonthBgColor}
                onChangeCurrentDate$={props.onChangeCurrentDate$}
                onChangeCurrentView$={props.onChangeCurrentView$}
            >
                {capitalizeFirstLetter(new Date(baseDate.valueOf()).toLocaleString(props.locale, {month: 'long'}))}
            </Month>
        );
    }

    return (
      <>
          <div qc-comp-id="yearview" style={props.styles}>
              <div style={{display: "flex", flexWrap: "wrap"}}>
                {months}
              </div>
          </div>
      </>
    );
});
