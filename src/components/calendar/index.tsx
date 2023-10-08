import { component$, $, useSignal, useStyles$, CSSProperties } from "@builder.io/qwik";

import css from "./calendar.module.css?inline";

import { Navigation } from "../navigation";
import { MonthView } from "../monthview";

export interface CalendarProps {
  onClickDay$?: (day: Date) => void,
  calendarStyles?: CSSProperties,
  navigationStyles?: CSSProperties,
  monthViewStyles?: CSSProperties,
  dayStyles?: CSSProperties,
  daysStyles?: CSSProperties,
  invalidDayStyles?: CSSProperties,
  dayTextColor?: string,
  weekendTextColor?: string,
  todayBgColor?: string
}

export const Calendar = component$((props: CalendarProps) => {
  useStyles$(css);

  const locale = "pt-br";

  const currentDate = useSignal(new Date().valueOf());

  // private methods
  const onChangeCurrentDate$ = $((newCurrentDate: number) => {
    currentDate.value = newCurrentDate;
  }); 

  return (
    <>
        <div qc-comp-id="calendar" style={props.calendarStyles}>
          <Navigation
            locale={locale}
            dateObj={currentDate.value}
            onChangeCurrentDate$={onChangeCurrentDate$}
            styles={props.navigationStyles}
          />
          <MonthView
            locale={locale}
            dateObj={currentDate.value}
            onClickDay$={props.onClickDay$}
            styles={props.monthViewStyles}
            dayStyles={props.dayStyles}
            daysStyles={props.daysStyles}
            invalidDayStyles={props.invalidDayStyles}
            dayTextColor={props.dayTextColor}
            weekendTextColor={props.weekendTextColor}
            todayBgColor={props.todayBgColor}
          />
        </div>
    </>
  );
});
