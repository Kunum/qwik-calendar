import { component$, useStyles$ } from "@builder.io/qwik";

import css from "./monthview.module.css?inline";

import { WeekDays } from "../weekdays";
import { Days } from "../days";

export interface MonthViewProps {
  locale: string,
  dateObj: number,
  onClickDay$?: (day: Date) => void
}

export const MonthView = component$((props: MonthViewProps) => {
  useStyles$(css);

  return (
    <>
        <div qc-comp-id="monthview">
            <WeekDays
              locale={props.locale}
            />
            <Days 
              dateObj={props.dateObj}
              onClickDay$={props.onClickDay$}
            />
        </div>
    </>
  );
});
