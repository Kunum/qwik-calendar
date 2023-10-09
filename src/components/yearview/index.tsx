import { CSSProperties, component$, useStyles$, Slot } from "@builder.io/qwik";

import css from "./yearview.module.css?inline";

interface MonthProps{
    styles?: CSSProperties
}

const Month = component$((props: MonthProps) => {
    return (
        <div style={props.styles}>
            <Slot/>
        </div>
    )
})

export interface YearViewProps {
    locale: string,
    dateObj: number,
    styles?: CSSProperties,
    monthStyles?: CSSProperties,
    currentMonthBgColor?: string
}
 
export const YearView = component$((props: YearViewProps) => {
  useStyles$(css);

  return (
    <>
        <div qc-comp-id="yearview" style={props.styles}>
            <div style={{display: "flex", flexWrap: "wrap"}}>

            </div>
        </div>
    </>
  );
});
