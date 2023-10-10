import { Calendar } from "./components/calendar";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Calendar by Kunum</title>
      </head>
      <body>
        <h1>Qwik Calendar Demo</h1>
        <Calendar startingView="year"/>
      </body>
    </>
  );
};
