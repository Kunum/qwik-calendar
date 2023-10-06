import { component$, $, useSignal, useStyles$ } from "@builder.io/qwik";

import css from "./calendar.module.css?inline";

import { Navigation } from "../navigation";
import { MonthView } from "../monthview";

export const Calendar = component$((props) => {
  useStyles$(css);

  const locale = "pt-br";

  const currentDate = useSignal(new Date().valueOf());

  const onChangeCurrentDate$ = $((newCurrentDate) => {
    currentDate.value = newCurrentDate;
  }); 

  const onClickDay$ = $((value) => {
    props.onClickDay$(value);
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
            onClickDay$={onClickDay$}
          />
        </div>
    </>
  );
});
