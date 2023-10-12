# qwik-calendar

A calendar component for qwik apps!

*The goal is to recreate [wojtekmaj/react-calendar](https://github.com/wojtekmaj/react-calendar) for qwik applications. This library is still in development so there are a lot of incomplete stuff* 

## Instalation

You can install this component libary using:

```shell
npm i qwik-calendar
```

## Usage

```jsx
import { Calendar } from "qwik-calendar";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Calendar by Kunum</title>
      </head>
      <body>
        <Calendar/>
      </body>
    </>
  );
};
```

## User guide

### Calendar

```tsx
import { Calendar } from "qwik-calendar";

<Calendar/>
```

| Prop name             | Prop Type                        | Description                                                                     | Default value | Example values                             |
| --------------------- | -------------------------------- | ------------------------------------------------------------------------------- | ------------- | ------------------------------------------ |
| onClickDay$           | (day: Date) => void \| undefined | Function called when the user clicks a day.                                     | n/a           | `(value) => alert('Clicked day: ', value)` |
| calendarStyles        | CSSProperties\| undefined        | CSS styles for the calendar container                                           | n/a           | `{borderRadius: "10px"}`                   |
| navigationStyles      | CSSProperties\| undefined        | CSS styles for the navigation (header) container                                | n/a           | `{backgroundColor: "#DDDDDD"}`             |
| monthViewStyles       | CSSProperties\| undefined        | CSS styles for the month view (days) container                                  | n/a           | `{backgroundColor: "#EEEEEE"}`             |
| yearViewStyles        | CSSProperties \| undefined       | CSS styles for the year view (months) container                                 | n/a           | `{backgroundColor: "#EEEEEE"}`             |
| dayStyles             | CSSProperties\| undefined        | CSS styles for each individual day (MonthView)                                  | n/a           | `{borderRadius: "50%"}`                    |
| monthStyles           | CSSProperties \| undefined       | CSS styles for each individual month (YearView)                                 | n/a           | `{borderRadius: "10%"}`                    |
| daysStyles            | CSSProperties\| undefined        | CSS styles for the days container                                               | n/a           | `{backgroundColor: "#EEEEEE"}`             |
| invalidDayStyles      | CSSProperties\| undefined        | CSS styles for invalid days (days from other months)                            | n/a           | `{color: "#FEFEFE"}`                       |
| dayTextColor          | string \| undefined              | The color of the day number                                                     | `"#00000"`    | `"#101101"`                                |
| weekendTextColor      | string \| undefined              | The color of the weekend day number                                             | `"#d10000"`   | `"ff0000"`                                 |
| todayBgColor          | string \| undefined              | The background color used to mark the current day in the calendar               | `"#ffff76"`   | `"ffe386"`                                 |
| locale                | string \| undefined              | The language of the calendar                                                    | `"pt-br"`     | `"en-us"`                                  |
| hideNavigation        | boolean \| undefined             | Defines if the navigation bar is going to be displayed                          | `false`       | `true`                                     |
| showNeighbouringMonth | boolean \| undefined             | Defines if the Month View is going to display days from the neighbouring months | `true`        | `false`                                    |
| startingView          | string \| undefined              | Defines in which view the calendar will start when first-rendered               | `"month"`     | `"year"`                                   |

### Views

Views are pre-defined exibition of the calendar that shows diferent kinds os dates. The user can move foward or backwards through the dates faster using diferent views that can be changed using the navigation bar.

**Avaliable views:**

* *Month View*: Shows an specific month with all of its days.
* *Year view*: Shows an specific year with all of its months.
* *Decade view*: Shows all years within an decade.

## Docs in other languages

* [🇧🇷](https://github.com/Kunum/qwik-calendar/blob/main/docs/PTBR.md)
