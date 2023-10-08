"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const css$4 = ":where([qc-comp-id='calendar']) {\r\n    width: 350px;\r\n    max-width: 100%;\r\n    background: white;\r\n    border: 1px solid #a0a096;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 1.125em;\r\n}\r\n\r\n:where([qc-comp-id='calendar']) button{\r\n    margin: 0;\r\n    border: 0;\r\n    outline: none;\r\n}\r\n\r\n\r\n:where([qc-comp-id='calendar']) button:enabled:hover{\r\n    background-color: #e6e6e6 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n:where([qc-comp-id='calendar']) *{\r\n    box-sizing: border-box;\r\n}\r\n";
const css$3 = ":where([qc-comp-id='navigation']){\r\n    display: flex;\r\n    height: 44px;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n:where([qc-comp-id='navigation']) button{\r\n    min-width: 44px;\r\n    background: none;\r\n}";
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
const Navigation = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$3, "Navigation_component_useStyles_IifmPGQx018"));
  const dateObj = qwik.useSignal(props.dateObj);
  const month = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [dateObj2, props2] = qwik.useLexicalScope();
    return new Date(dateObj2.value).toLocaleString(props2.locale, {
      month: "long"
    });
  }, "Navigation_component_month_useComputed_Usq8pA9lHR4", [
    dateObj,
    props
  ]));
  const year = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [dateObj2] = qwik.useLexicalScope();
    return new Date(dateObj2.value).getFullYear();
  }, "Navigation_component_year_useComputed_e3sELr0gSus", [
    dateObj
  ]));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [dateObj2, props2] = qwik.useLexicalScope();
    track(() => dateObj2.value);
    props2.onChangeCurrentDate$(dateObj2.value);
  }, "Navigation_component_useVisibleTask_RHHBuCKcohU", [
    dateObj,
    props
  ]));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "navigation",
      style: qwik._fnSignal((p0) => p0.styles, [
        props
      ], "p0.styles")
    }, [
      /* @__PURE__ */ qwik._jsxQ("button", null, {
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [dateObj2, year2] = qwik.useLexicalScope();
          const newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value - 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_Qgo7smtBKaM", [
          dateObj,
          year
        ])
      }, "«", 3, null),
      /* @__PURE__ */ qwik._jsxQ("button", null, {
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [dateObj2, year2] = qwik.useLexicalScope();
          const newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value, newDate.getMonth() - 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_1_HKyCOc2zRXQ", [
          dateObj,
          year
        ])
      }, "‹", 3, null),
      /* @__PURE__ */ qwik._jsxQ("button", null, {
        style: {
          flexGrow: 1
        }
      }, /* @__PURE__ */ qwik._jsxQ("span", null, null, [
        capitalizeFirstLetter(month.value),
        " ",
        qwik._fnSignal((p0) => p0.value, [
          year
        ], "p0.value")
      ], 1, null), 1, null),
      /* @__PURE__ */ qwik._jsxQ("button", null, {
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [dateObj2, year2] = qwik.useLexicalScope();
          const newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value, newDate.getMonth() + 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_2_r4BT0i5EU74", [
          dateObj,
          year
        ])
      }, "›", 3, null),
      /* @__PURE__ */ qwik._jsxQ("button", null, {
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [dateObj2, year2] = qwik.useLexicalScope();
          const newDate = new Date(dateObj2.value);
          newDate.setFullYear(year2.value + 1);
          dateObj2.value = newDate.valueOf();
        }, "Navigation_component__Fragment_div_button_onClick_3_RTSJBJ2yaPU", [
          dateObj,
          year
        ])
      }, "»", 3, null)
    ], 1, null)
  }, 1, "OK_0");
}, "Navigation_component_ts5VFnLi8bQ"));
const css$2 = ":where([qc-comp-id='monthview']){\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n}";
const css$1 = ":where([qc-comp-id='weekdays']){\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n:where([qc-comp-id='weekday']){\r\n    flex: 0 0 14.2857%;\r\n    overflow: hidden;\r\n    margin-inline-end: 0px;\r\n    padding: 0.5em;\r\n}";
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
const WeekDay = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$1, "WeekDay_component_useStyles_3vNhaKsSX1M"));
  return /* @__PURE__ */ qwik._jsxQ("div", null, {
    "qc-comp-id": "weekday"
  }, /* @__PURE__ */ qwik._jsxQ("abbr", null, {
    "aria-label": qwik._fnSignal((p0) => p0.label, [
      props
    ], "p0.label"),
    title: qwik._fnSignal((p0) => p0.label, [
      props
    ], "p0.label")
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "zg_0"), 1, null), 1, "zg_1");
}, "WeekDay_component_2V7U0x34BSU"));
const WeekDays = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "weekdays"
    }, [
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][0].slice(0, 3),
        label: weekdays[props.locale][0]
      }, 1, "zg_2"),
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][1].slice(0, 3),
        label: weekdays[props.locale][1]
      }, 1, "zg_3"),
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][2].slice(0, 3),
        label: weekdays[props.locale][2]
      }, 1, "zg_4"),
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][3].slice(0, 3),
        label: weekdays[props.locale][3]
      }, 1, "zg_5"),
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][4].slice(0, 3),
        label: weekdays[props.locale][4]
      }, 1, "zg_6"),
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][5].slice(0, 3),
        label: weekdays[props.locale][5]
      }, 1, "zg_7"),
      /* @__PURE__ */ qwik._jsxC(WeekDay, {
        children: weekdays[props.locale][6].slice(0, 3),
        label: weekdays[props.locale][6]
      }, 1, "zg_8")
    ], 1, null)
  }, 1, "zg_9");
}, "WeekDays_component_Mq9nS60Gew8"));
const css = ":where([qc-comp-id='days-div']){\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n:where([qc-comp-id='day']), :where([qc-comp-id='prior-day']){\r\n    flex: 0 0 14.2857%;\r\n    overflow: hidden;\r\n    margin-inline-end: 0px;\r\n    \r\n    max-width: 100%;\r\n    padding: 10px 6.6667px;\r\n    background: none;\r\n    text-align: center;\r\n    line-height: 16px;\r\n}\r\n\r\n:where([qc-comp-id='prior-day']){\r\n    color: #757575;\r\n}\r\n";
const Day = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css, "Day_component_useStyles_ak21olthqc0"));
  const thisDate = new Date(props.dateObj.valueOf());
  const today = /* @__PURE__ */ new Date();
  const dayTextColor = props.dayTextColor ? props.dayTextColor : "black";
  const weekendTextColor = props.weekendTextColor ? props.weekendTextColor : "#d10000";
  const todayBgColor = props.todayBgColor ? props.todayBgColor : "#FFFF76";
  const textColor = thisDate.getDay() === 0 || thisDate.getDay() === 6 ? weekendTextColor : dayTextColor;
  const bgColor = Math.round(props.dateObj / 864e5) === Math.round(today.valueOf() / 864e5) ? todayBgColor : "transparent";
  const myOnClick = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [props2, thisDate2] = qwik.useLexicalScope();
    if (props2.onClickDay$)
      props2.onClickDay$(thisDate2);
  }, "Day_component_myOnClick_kPNqcPO4KzY", [
    props,
    thisDate
  ]);
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("button", {
      style: {
        color: textColor,
        backgroundColor: bgColor,
        ...props.style
      }
    }, {
      onClick$: myOnClick,
      "qc-comp-id": "day"
    }, /* @__PURE__ */ qwik._jsxQ("abbr", null, null, thisDate.getDate(), 1, null), 1, null)
  }, 1, "Tp_0");
}, "Day_component_F0N044Ws8Mg"));
const PriorDay = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const thisDate = new Date(props.dateObj);
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("button", null, {
      disabled: true,
      "qc-comp-id": "prior-day",
      style: qwik._fnSignal((p0) => p0.styles, [
        props
      ], "p0.styles")
    }, /* @__PURE__ */ qwik._jsxQ("abbr", null, null, thisDate.getDate(), 1, null), 1, null)
  }, 1, "Tp_1");
}, "PriorDay_component_iAn9MsxFg0E"));
function getDaysSinceLastSunday(dateObj, styles) {
  qwik._jsxBranch();
  const days = [];
  while (dateObj.getDay() !== 0) {
    dateObj.setDate(dateObj.getDate() - 1);
    days.unshift(/* @__PURE__ */ qwik._jsxC(PriorDay, {
      dateObj: dateObj.valueOf(),
      styles
    }, 3, dateObj.valueOf()));
  }
  return days;
}
function getMonthLength(dateObj) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}
function getDaysUntilNextSaturday(dateObj, styles) {
  qwik._jsxBranch();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const newDateObj = new Date(year, month, 0);
  const days = [];
  const delta = 6 - newDateObj.getDay();
  for (let i = 0; i < delta; i++) {
    newDateObj.setDate(newDateObj.getDate() + 1);
    days.push(/* @__PURE__ */ qwik._jsxC(PriorDay, {
      dateObj: newDateObj.valueOf(),
      styles
    }, 3, newDateObj.valueOf()));
  }
  return days;
}
const Days = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  let newDate = new Date(props.dateObj);
  newDate.setDate(1);
  const daysSinceLastSunday = getDaysSinceLastSunday(newDate);
  newDate = new Date(props.dateObj);
  newDate.setDate(1);
  const lens = getMonthLength(newDate);
  const daysOfTheMonth = [];
  for (let i = 0; i < lens; i++) {
    daysOfTheMonth.push(/* @__PURE__ */ qwik._jsxC(Day, {
      dateObj: newDate.valueOf(),
      onClickDay$: props.onClickDay$,
      get style() {
        return props.dayStyles;
      },
      get dayTextColor() {
        return props.dayTextColor;
      },
      get weekendTextColor() {
        return props.weekendTextColor;
      },
      get todayBgColor() {
        return props.todayBgColor;
      },
      [qwik._IMMUTABLE]: {
        dayTextColor: qwik._fnSignal((p0) => p0.dayTextColor, [
          props
        ], "p0.dayTextColor"),
        style: qwik._fnSignal((p0) => p0.dayStyles, [
          props
        ], "p0.dayStyles"),
        todayBgColor: qwik._fnSignal((p0) => p0.todayBgColor, [
          props
        ], "p0.todayBgColor"),
        weekendTextColor: qwik._fnSignal((p0) => p0.weekendTextColor, [
          props
        ], "p0.weekendTextColor")
      }
    }, 2, newDate.valueOf()));
    newDate.setDate(newDate.getDate() + 1);
  }
  const daysUntilNextSaturday = getDaysUntilNextSaturday(newDate);
  const days = [
    ...daysSinceLastSunday,
    ...daysOfTheMonth,
    ...daysUntilNextSaturday
  ];
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "days-div",
      style: qwik._fnSignal((p0) => p0.styles, [
        props
      ], "p0.styles")
    }, days, 1, null)
  }, 1, "Tp_2");
}, "Days_component_4ArRThbobyA"));
const MonthView = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$2, "MonthView_component_useStyles_4hMoRvpsKY4"));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "monthview",
      style: qwik._fnSignal((p0) => p0.styles, [
        props
      ], "p0.styles")
    }, [
      /* @__PURE__ */ qwik._jsxC(WeekDays, {
        get locale() {
          return props.locale;
        },
        [qwik._IMMUTABLE]: {
          locale: qwik._fnSignal((p0) => p0.locale, [
            props
          ], "p0.locale")
        }
      }, 3, "ti_0"),
      /* @__PURE__ */ qwik._jsxC(Days, {
        get dateObj() {
          return props.dateObj;
        },
        onClickDay$: props.onClickDay$,
        get styles() {
          return props.daysStyles;
        },
        get dayStyles() {
          return props.dayStyles;
        },
        get invalidDayStyles() {
          return props.invalidDayStyles;
        },
        get dayTextColor() {
          return props.dayTextColor;
        },
        get weekendTextColor() {
          return props.weekendTextColor;
        },
        get todayBgColor() {
          return props.todayBgColor;
        },
        [qwik._IMMUTABLE]: {
          dateObj: qwik._fnSignal((p0) => p0.dateObj, [
            props
          ], "p0.dateObj"),
          dayStyles: qwik._fnSignal((p0) => p0.dayStyles, [
            props
          ], "p0.dayStyles"),
          dayTextColor: qwik._fnSignal((p0) => p0.dayTextColor, [
            props
          ], "p0.dayTextColor"),
          invalidDayStyles: qwik._fnSignal((p0) => p0.invalidDayStyles, [
            props
          ], "p0.invalidDayStyles"),
          styles: qwik._fnSignal((p0) => p0.daysStyles, [
            props
          ], "p0.daysStyles"),
          todayBgColor: qwik._fnSignal((p0) => p0.todayBgColor, [
            props
          ], "p0.todayBgColor"),
          weekendTextColor: qwik._fnSignal((p0) => p0.weekendTextColor, [
            props
          ], "p0.weekendTextColor")
        }
      }, 2, "ti_1")
    ], 1, null)
  }, 1, "ti_2");
}, "MonthView_component_gCOeCaxTrvg"));
const Calendar = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$4, "Calendar_component_useStyles_RySDPue42WQ"));
  const currentDate = qwik.useSignal((/* @__PURE__ */ new Date()).valueOf());
  const onChangeCurrentDate$ = /* @__PURE__ */ qwik.inlinedQrl((newCurrentDate) => {
    const [currentDate2] = qwik.useLexicalScope();
    currentDate2.value = newCurrentDate;
  }, "Calendar_component_onChangeCurrentDate_ww4uyNjcUfU", [
    currentDate
  ]);
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "calendar",
      style: qwik._fnSignal((p0) => p0.calendarStyles, [
        props
      ], "p0.calendarStyles")
    }, [
      /* @__PURE__ */ qwik._jsxC(Navigation, {
        locale: "pt-br",
        get dateObj() {
          return currentDate.value;
        },
        onChangeCurrentDate$,
        get styles() {
          return props.navigationStyles;
        },
        [qwik._IMMUTABLE]: {
          dateObj: qwik._fnSignal((p0) => p0.value, [
            currentDate
          ], "p0.value"),
          locale: qwik._IMMUTABLE,
          onChangeCurrentDate$: qwik._IMMUTABLE,
          styles: qwik._fnSignal((p0) => p0.navigationStyles, [
            props
          ], "p0.navigationStyles")
        }
      }, 3, "w3_0"),
      /* @__PURE__ */ qwik._jsxC(MonthView, {
        locale: "pt-br",
        get dateObj() {
          return currentDate.value;
        },
        onClickDay$: props.onClickDay$,
        get styles() {
          return props.monthViewStyles;
        },
        get dayStyles() {
          return props.dayStyles;
        },
        get daysStyles() {
          return props.daysStyles;
        },
        get invalidDayStyles() {
          return props.invalidDayStyles;
        },
        get dayTextColor() {
          return props.dayTextColor;
        },
        get weekendTextColor() {
          return props.weekendTextColor;
        },
        get todayBgColor() {
          return props.todayBgColor;
        },
        [qwik._IMMUTABLE]: {
          dateObj: qwik._fnSignal((p0) => p0.value, [
            currentDate
          ], "p0.value"),
          dayStyles: qwik._fnSignal((p0) => p0.dayStyles, [
            props
          ], "p0.dayStyles"),
          dayTextColor: qwik._fnSignal((p0) => p0.dayTextColor, [
            props
          ], "p0.dayTextColor"),
          daysStyles: qwik._fnSignal((p0) => p0.daysStyles, [
            props
          ], "p0.daysStyles"),
          invalidDayStyles: qwik._fnSignal((p0) => p0.invalidDayStyles, [
            props
          ], "p0.invalidDayStyles"),
          locale: qwik._IMMUTABLE,
          styles: qwik._fnSignal((p0) => p0.monthViewStyles, [
            props
          ], "p0.monthViewStyles"),
          todayBgColor: qwik._fnSignal((p0) => p0.todayBgColor, [
            props
          ], "p0.todayBgColor"),
          weekendTextColor: qwik._fnSignal((p0) => p0.weekendTextColor, [
            props
          ], "p0.weekendTextColor")
        }
      }, 2, "w3_1")
    ], 1, null)
  }, 1, "w3_2");
}, "Calendar_component_9twM9FB8yQY"));
exports.Calendar = Calendar;
