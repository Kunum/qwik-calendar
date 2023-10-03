import { component$ } from "@builder.io/qwik";

export const MonthView = component$((props) => {
  return (
    <>
        <div>
            <p>{props.dateObj.toLocaleString(props.locale, {month: 'long'})}</p>
        </div>
    </>
  );
});
