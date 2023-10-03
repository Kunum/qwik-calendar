import { component$, $, useSignal } from "@builder.io/qwik";

import css from "./calendar.module.css";
import { Navigation } from "../navigation";
import { MonthView } from "../monthview";

export const Calendar = component$((props) => {

  const locale = "pt-br";

  const currentDate = useSignal(new Date().valueOf());

  const onChangeCurrentDate$ = $((newCurrentDate) => {
    currentDate.value = newCurrentDate;
    console.log("aqui no calendar")
  }); 

  return (
    <>
        <div id={css.qwikCalendar}>
          <Navigation
            locale={locale}
            dateObj={currentDate.value}
            onChangeCurrentDate$={onChangeCurrentDate$}
          />
          <MonthView
            dateObj={currentDate.value}
          />
        </div>
    </>
  );
});
