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
import { Calendar } from "./components/calendar";

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

| Prop name   | Description                                 | Default value | Example values                             |
| ----------- | ------------------------------------------- | ------------- | ------------------------------------------ |
| onClickDay$ | Function called when the user clicks a day. | n/a           | `(value) => alert('Clicked day: ', value)` |

## Docs in other languages

* [🇧🇷](https://github.com/Kunum/qwik-calendar/blob/main/docs/PTBR.md)
