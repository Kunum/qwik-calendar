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

| Prop name        | Prop Type                        | Description                                                       | Default value | Example values                             |
| ---------------- | -------------------------------- | ----------------------------------------------------------------- | ------------- | ------------------------------------------ |
| onClickDay$      | (day: Date) => void \| undefined | Function called when the user clicks a day.                       | n/a           | `(value) => alert('Clicked day: ', value)` |
| calendarStyles   | CSSProperties\| undefined        | CSS styles for the calendar container                             | n/a           | `{borderRadius: "10px"}`                   |
| navigationStyles | CSSProperties\| undefined        | CSS styles for the navigation (header) container                  | n/a           | `{backgroundColor: "#DDDDDD"}`             |
| monthViewStyles  | CSSProperties\| undefined        | CSS styles for the month view (days) container                    | n/a           | `{backgroundColor: "#EEEEEE"}`             |
| dayStyles        | CSSProperties\| undefined        | CSS styles for each individual day                                | n/a           | `{borderRadius: "50%"}`                    |
| daysStyles       | CSSProperties\| undefined        | CSS styles for the days container                                 | n/a           | `{backgroundColor: "#EEEEEE"}`             |
| invalidDayStyles | CSSProperties\| undefined        | CSS styles for invalid days (days from other months)              | n/a           | `{color: "#FEFEFE"}`                       |
| dayTextColor     | string \| undefined              | The color of the day number                                       | `"#00000"`    | `"#101101"`                                |
| weekendTextColor | string \| undefined              | The color of the weekend day number                               | `"#d10000"`   | `"ff0000"`                                 |
| todayBgColor     | string \| undefined              | The background color used to mark the current day in the calendar | `"#ffff76"`   | `"ffe386"`                                 |

## Docs in other languages

* [🇧🇷](https://github.com/Kunum/qwik-calendar/blob/main/docs/PTBR.md)
