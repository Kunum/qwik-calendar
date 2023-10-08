import { CSSProperties, component$, useStyles$ } from "@builder.io/qwik";

import css from "./monthview.module.css?inline";

import { WeekDays } from "../weekdays";
import { Days } from "../days";

export interface MonthViewProps {
  locale: string,
  dateObj: number,
  onClickDay$?: (day: Date) => void,
  styles?: CSSProperties,
  dayStyles?: CSSProperties,
  daysStyles?: CSSProperties,
  invalidDayStyles?: CSSProperties,
  dayTextColor?: string,
  weekendTextColor?: string,
  todayBgColor?: string
}

export const MonthView = component$((props: MonthViewProps) => {
  useStyles$(css);

  return (
    <>
        <div qc-comp-id="monthview" style={props.styles}>
            <WeekDays
              locale={props.locale}
            />
            <Days 
              dateObj={props.dateObj}
              onClickDay$={props.onClickDay$}
              styles={props.daysStyles}
              dayStyles={props.dayStyles}
              invalidDayStyles={props.invalidDayStyles}
              dayTextColor={props.dayTextColor}
              weekendTextColor={props.weekendTextColor}
              todayBgColor={props.todayBgColor}
            />
        </div>
    </>
  );
});
