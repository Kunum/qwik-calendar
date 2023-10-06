import { component$, $, useSignal, useStyles$ } from "@builder.io/qwik";

import css from "./calendar.module.css?inline";

import { Navigation } from "../navigation";
import { MonthView } from "../monthview";

export interface CalendarProps {
  onClickDay$?: (day: Date) => void
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
        <div qc-comp-id="calendar">
          <Navigation
            locale={locale}
            dateObj={currentDate.value}
            onChangeCurrentDate$={onChangeCurrentDate$}
          />
          <MonthView
            locale={locale}
            dateObj={currentDate.value}
            onClickDay$={props.onClickDay$}
          />
        </div>
    </>
  );
});
