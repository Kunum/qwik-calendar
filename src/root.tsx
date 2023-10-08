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
        <Calendar 
          onClickDay$={(day)=>console.log(day)} 
          calendarStyles={{borderRadius: "10px"}}
          navigationStyles={{backgroundColor: "#DDDDDD"}}
          monthViewStyles={{backgroundColor: "#EEEEEE"}}
        />
      </body>
    </>
  );
};
