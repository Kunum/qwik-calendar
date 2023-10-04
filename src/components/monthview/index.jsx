import { component$ } from "@builder.io/qwik";

import css from "./monthview.module.css";
import { WeekDays } from "../weekdays";
import { Days } from "../days";

export const MonthView = component$((props) => {
  return (
    <>
        <div id={css.monthview}>
            <WeekDays
              locale={props.locale}
            />
            <Days 
              dateObj={props.dateObj}
            />
        </div>
    </>
  );
});
