import { component$, useStyles$ } from "@builder.io/qwik";

import css from "./monthview.module.css?inline";

import { WeekDays } from "../weekdays";
import { Days } from "../days";

export const MonthView = component$((props) => {
  useStyles$(css);

  return (
    <>
        <div id={css.monthview}>
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
