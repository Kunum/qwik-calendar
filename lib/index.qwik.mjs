import { componentQrl, inlinedQrl, useStylesQrl, useSignal, useComputedQrl, useLexicalScope, useVisibleTaskQrl, _jsxC, _jsxQ, _fnSignal, Slot, _jsxBranch, _IMMUTABLE } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
const css$4 = "#_qwikCalendar_25b17_1{\r\n    width: 350px;\r\n    max-width: 100%;\r\n    background: white;\r\n    border: 1px solid #a0a096;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 1.125em;\r\n}\r\n\r\n#_qwikCalendar_25b17_1 button{\r\n    margin: 0;\r\n    border: 0;\r\n    outline: none;\r\n}\r\n\r\n\r\n#_qwikCalendar_25b17_1 button:enabled:hover{\r\n    background-color: #e6e6e6 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n#_qwikCalendar_25b17_1 *{\r\n    box-sizing: border-box;\r\n}\r\n";
const css$3 = "#_navigation_17grw_1{\r\n    display: flex;\r\n    height: 44px;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n#_navigation_17grw_1 button{\r\n    min-width: 44px;\r\n    background: none;\r\n}";
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
const Navigation = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(css$3, "Navigation_component_useStyles_Sz8uDrDuBcQ"));
  const dateObj = useSignal(props.dateObj);
  const month = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [dateObj2, props2] = useLexicalScope();
    return new Date(dateObj2.value).toLocaleString(props2.locale, {
      month: "long"
    });
  }, "Navigation_component_month_useComputed_1JFy7LxRoak", [
    dateObj,
    props
  ]));
  const year = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [dateObj2] = useLexicalScope();
    return new Date(dateObj2.value).getFullYear();
  }, "Navigation_component_year_useComputed_0QtXdQSfuAQ", [
    dateObj
  ]));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [dateObj2, props2] = useLexicalScope();
    track(() => dateObj2.value);
    props2.onChangeCurrentDate$(dateObj2.value);
  }, "Navigation_component_useVisibleTask_QmnxD90o4LM", [
    dateObj,
    props
  ]));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("div", null, {
      id: css$3.navigation
    }, [
      /* @__PURE__ */ _jsxQ("button", null, {
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [dateObj2, year2] = useLexicalScope();
          let newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value - 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_KoT5od8Vhmk", [
          dateObj,
          year
        ])
      }, "«", 3, null),
      /* @__PURE__ */ _jsxQ("button", null, {
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [dateObj2, year2] = useLexicalScope();
          let newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value, newDate.getMonth() - 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_1_Ce0L6BRdsiQ", [
          dateObj,
          year
        ])
      }, "‹", 3, null),
      /* @__PURE__ */ _jsxQ("button", null, {
        style: {
          flexGrow: 1
        }
      }, /* @__PURE__ */ _jsxQ("span", null, null, [
        capitalizeFirstLetter(month.value),
        " ",
        _fnSignal((p0) => p0.value, [
          year
        ], "p0.value")
      ], 1, null), 1, null),
      /* @__PURE__ */ _jsxQ("button", null, {
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [dateObj2, year2] = useLexicalScope();
          let newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value, newDate.getMonth() + 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_2_fqXKF03rq1w", [
          dateObj,
          year
        ])
      }, "›", 3, null),
      /* @__PURE__ */ _jsxQ("button", null, {
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [dateObj2, year2] = useLexicalScope();
          let newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value + 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_3_dsIfPxHqR3Y", [
          dateObj,
          year
        ])
      }, "»", 3, null)
    ], 1, null)
  }, 1, "OW_0");
}, "Navigation_component_ezt56nJ0n4A"));
const css$2 = "#_monthview_17ynd_1{\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n}";
const css$1 = "#_weekdays_vlgoy_1{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n._weekday_vlgoy_11{\r\n    flex: 0 0 14.2857%;\r\n    overflow: hidden;\r\n    margin-inline-end: 0px;\r\n    padding: 0.5em;\r\n}";
const weekdays = {
  "pt-br": [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ]
};
const WeekDay = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(css$1, "WeekDay_component_useStyles_q7KR2x0aK4Q"));
  return /* @__PURE__ */ _jsxQ("div", null, {
    class: css$1.weekday
  }, /* @__PURE__ */ _jsxQ("abbr", null, {
    "aria-label": _fnSignal((p0) => p0.label, [
      props
    ], "p0.label"),
    title: _fnSignal((p0) => p0.label, [
      props
    ], "p0.label")
  }, /* @__PURE__ */ _jsxC(Slot, null, 3, "0k_0"), 1, null), 1, "0k_1");
}, "WeekDay_component_UPMJPk1hrpI"));
const WeekDays = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  let daysOfTheWeek = weekdays[props.locale];
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("div", null, {
      id: css$1.weekdays
    }, [
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[0].slice(0, 3),
        label: daysOfTheWeek[0]
      }, 1, "0k_2"),
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[1].slice(0, 3),
        label: daysOfTheWeek[1]
      }, 1, "0k_3"),
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[2].slice(0, 3),
        label: daysOfTheWeek[2]
      }, 1, "0k_4"),
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[3].slice(0, 3),
        label: daysOfTheWeek[3]
      }, 1, "0k_5"),
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[4].slice(0, 3),
        label: daysOfTheWeek[4]
      }, 1, "0k_6"),
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[5].slice(0, 3),
        label: daysOfTheWeek[5]
      }, 1, "0k_7"),
      /* @__PURE__ */ _jsxC(WeekDay, {
        children: daysOfTheWeek[6].slice(0, 3),
        label: daysOfTheWeek[6]
      }, 1, "0k_8")
    ], 1, null)
  }, 1, "0k_9");
}, "WeekDays_component_N4yBkK9ew5g"));
const css = "#_days_1tz84_1{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n._day_1tz84_11, ._priorDay_1tz84_11{\r\n    flex: 0 0 14.2857%;\r\n    overflow: hidden;\r\n    margin-inline-end: 0px;\r\n    \r\n    max-width: 100%;\r\n    padding: 10px 6.6667px;\r\n    background: none;\r\n    text-align: center;\r\n    line-height: 16px;\r\n}\r\n\r\n._priorDay_1tz84_11{\r\n    color: #757575;\r\n}\r\n\r\n._weekendDayDay_1tz84_43{\r\n    color: #d10000;\r\n}";
const Day = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(css, "Day_component_useStyles_vL4SvOKOlFM"));
  const thisDate = new Date(props.dateObj);
  const today = /* @__PURE__ */ new Date();
  let textColor = thisDate.getDay() === 0 || thisDate.getDay() === 6 ? "#d10000" : "#000000";
  let bgColor = Math.round(props.dateObj / 864e5) === Math.round(today.valueOf() / 864e5) ? "#FFFF76" : "transparent";
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("button", {
      onClick$: /* @__PURE__ */ inlinedQrl(() => {
        const [props2, thisDate2] = useLexicalScope();
        props2.onClickDay$(thisDate2);
      }, "Day_component__Fragment_button_onClick_p6Kjb0Du3oE", [
        props,
        thisDate
      ]),
      style: {
        color: textColor,
        backgroundColor: bgColor
      }
    }, {
      class: css.day
    }, /* @__PURE__ */ _jsxQ("abbr", null, null, thisDate.getDate(), 1, null), 0, null)
  }, 1, "fI_0");
}, "Day_component_z1kGCHJ5KfU"));
const PriorDay = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const thisDate = new Date(props.dateObj);
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("button", null, {
      class: css.priorDay,
      disabled: true
    }, /* @__PURE__ */ _jsxQ("abbr", null, null, thisDate.getDate(), 1, null), 1, null)
  }, 1, "fI_1");
}, "PriorDay_component_YQzONlsDR04"));
function getDaysSinceLastSunday(dateObj) {
  _jsxBranch();
  let days = [];
  while (dateObj.getDay() !== 0) {
    dateObj.setDate(dateObj.getDate() - 1);
    days.unshift(/* @__PURE__ */ _jsxC(PriorDay, {
      dateObj: dateObj.valueOf()
    }, 3, dateObj.valueOf()));
  }
  return days;
}
function getMonthLength(dateObj) {
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}
function getDaysOfTheMonth(dateObj, callback) {
  _jsxBranch();
  let days = [];
  let lens = getMonthLength(dateObj);
  for (let i = 0; i < lens; i++) {
    days.push(/* @__PURE__ */ _jsxC(Day, {
      dateObj: dateObj.valueOf(),
      onClickDay$: callback
    }, 2, dateObj.valueOf()));
    dateObj.setDate(dateObj.getDate() + 1);
  }
  return days;
}
function getDaysUntilNextSaturday(dateObj) {
  _jsxBranch();
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let newDateObj = new Date(year, month, 0);
  let days = [];
  let delta = 6 - newDateObj.getDay();
  for (let i = 0; i < delta; i++) {
    newDateObj.setDate(newDateObj.getDate() + 1);
    days.push(/* @__PURE__ */ _jsxC(PriorDay, {
      dateObj: newDateObj.valueOf()
    }, 3, newDateObj.valueOf()));
  }
  return days;
}
const Days = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  let newDate = new Date(props.dateObj);
  newDate.setDate(1);
  let daysSinceLastSunday = getDaysSinceLastSunday(newDate);
  newDate = new Date(props.dateObj);
  newDate.setDate(1);
  let daysOfTheMonth = getDaysOfTheMonth(newDate, props.onClickDay$);
  let daysUntilNextSaturday = getDaysUntilNextSaturday(newDate);
  let days = [
    ...daysSinceLastSunday,
    ...daysOfTheMonth,
    ...daysUntilNextSaturday
  ];
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("div", null, {
      id: css.days
    }, days, 1, null)
  }, 1, "fI_2");
}, "Days_component_QGhJnqZ6DaM"));
const MonthView = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(css$2, "MonthView_component_useStyles_2Akj3BiajEA"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("div", null, {
      id: css$2.monthview
    }, [
      /* @__PURE__ */ _jsxC(WeekDays, {
        get locale() {
          return props.locale;
        },
        [_IMMUTABLE]: {
          locale: _fnSignal((p0) => p0.locale, [
            props
          ], "p0.locale")
        }
      }, 3, "GX_0"),
      /* @__PURE__ */ _jsxC(Days, {
        get dateObj() {
          return props.dateObj;
        },
        onClickDay$: props.onClickDay$,
        [_IMMUTABLE]: {
          dateObj: _fnSignal((p0) => p0.dateObj, [
            props
          ], "p0.dateObj")
        }
      }, 2, "GX_1")
    ], 1, null)
  }, 1, "GX_2");
}, "MonthView_component_RZp1cQ7Eck4"));
const Calendar = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(css$4, "Calendar_component_useStyles_UdDsI53gKFo"));
  const currentDate = useSignal((/* @__PURE__ */ new Date()).valueOf());
  const onChangeCurrentDate$ = /* @__PURE__ */ inlinedQrl((newCurrentDate) => {
    const [currentDate2] = useLexicalScope();
    currentDate2.value = newCurrentDate;
  }, "Calendar_component_onChangeCurrentDate_8ywJZ0LsJNA", [
    currentDate
  ]);
  const onClickDay$ = /* @__PURE__ */ inlinedQrl((value) => {
    const [props2] = useLexicalScope();
    props2.onClickDay$(value);
  }, "Calendar_component_onClickDay_WLXW7m2J2KE", [
    props
  ]);
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("div", null, {
      id: css$4.qwikCalendar
    }, [
      /* @__PURE__ */ _jsxC(Navigation, {
        locale: "pt-br",
        get dateObj() {
          return currentDate.value;
        },
        onChangeCurrentDate$,
        [_IMMUTABLE]: {
          dateObj: _fnSignal((p0) => p0.value, [
            currentDate
          ], "p0.value"),
          locale: _IMMUTABLE,
          onChangeCurrentDate$: _IMMUTABLE
        }
      }, 3, "0W_0"),
      /* @__PURE__ */ _jsxC(MonthView, {
        locale: "pt-br",
        get dateObj() {
          return currentDate.value;
        },
        onClickDay$,
        [_IMMUTABLE]: {
          dateObj: _fnSignal((p0) => p0.value, [
            currentDate
          ], "p0.value"),
          locale: _IMMUTABLE,
          onClickDay$: _IMMUTABLE
        }
      }, 3, "0W_1")
    ], 1, null)
  }, 1, "0W_2");
}, "Calendar_component_z9pBQslbOVo"));
export {
  Calendar
};
