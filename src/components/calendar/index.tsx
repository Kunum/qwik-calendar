import { component$, $, useSignal, useStyles$, CSSProperties } from "@builder.io/qwik";

import css from "./calendar.module.css?inline";

import { Navigation } from "../navigation";
import { MonthView } from "../monthview";
import { YearView } from "../yearview";

export interface CalendarProps {
  onClickDay$?: (day: Date) => void,
  calendarStyles?: CSSProperties,
  navigationStyles?: CSSProperties,
  monthViewStyles?: CSSProperties,
  yearViewStyles?: CSSProperties,
  dayStyles?: CSSProperties,
  monthStyles?: CSSProperties,
  daysStyles?: CSSProperties,
  invalidDayStyles?: CSSProperties,
  dayTextColor?: string,
  weekendTextColor?: string,
  todayBgColor?: string,
  locale?: string,
  hideNavigation?: boolean,
  showNeighbouringMonth?: boolean
}

export const Calendar = component$((props: CalendarProps) => {
  useStyles$(css);

  const currentView = useSignal("month");
  const currentDate = useSignal(new Date().valueOf());

  const locale = props.locale ? props.locale : "pt-br";

  // private methods
  const onChangeCurrentDate$ = $((newCurrentDate: number) => {
    currentDate.value = newCurrentDate;
  }); 

  const onChangeView$ = $((newView: string) => {
    currentView.value = newView;
  });

  let view;

  if (currentView.value === "month"){
    view = <MonthView
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
              showNeighbouringMonth={props.showNeighbouringMonth}
            />
  }
  else if (currentView.value === "year") {
    view = <YearView
              locale={locale}
              dateObj={currentDate.value}
              styles={props.yearViewStyles}
              monthStyles={props.monthStyles}
              currentMonthBgColor={props.todayBgColor}
            />
  }

  return (
    <>
        <div qc-comp-id="calendar" style={props.calendarStyles}>

          {
            props.hideNavigation ?
            <></> 
            :
            <Navigation
              locale={locale}
              dateObj={currentDate.value}
              onChangeCurrentDate$={onChangeCurrentDate$}
              onChangeCurrentView$={onChangeView$}
              styles={props.navigationStyles}
            />
          }
          
          {view}
          
        </div>
    </>
  );
});
