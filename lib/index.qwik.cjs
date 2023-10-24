"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const css$7 = ":where([qc-comp-id='calendar']) {\r\n    aspect-ratio: 4/3;\r\n    background: white;\r\n    border: 1px solid #a0a096;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 1.125em;\r\n}\r\n\r\n:where([qc-comp-id='calendar']) button{\r\n    margin: 0;\r\n    border: 0;\r\n    outline: none;\r\n}\r\n\r\n\r\n:where([qc-comp-id='calendar']) button:enabled:hover{\r\n    background-color: #e6e6e6 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n:where([qc-comp-id='calendar']) *{\r\n    box-sizing: border-box;\r\n}\r\n\r\n:where([qc-comp-id='tile']){\r\n    padding: 2em 0.5em;\r\n}\r\n";
const css$6 = ":where([qc-comp-id='navigation']){\r\n    display: flex;\r\n    height: 10%;\r\n    min-height: 44px;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n:where([qc-comp-id='navigation']) button{\r\n    min-width: 44px;\r\n    background: none;\r\n}";
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function getFirstYearOfTheDecade(year) {
  return Math.trunc(year / 10) * 10;
}
function getFirstYearOfTheCentury(year) {
  return Math.trunc(year / 100) * 100;
}
function calculateDecade(year) {
  const firstYear = Math.trunc(year / 10) * 10;
  const lastYear = firstYear + 9;
  return `${firstYear} - ${lastYear}`;
}
function calculateCentury(year) {
  const firstYear = Math.trunc(year / 100) * 100;
  const lastYear = firstYear + 99;
  return `${firstYear} - ${lastYear}`;
}
const Navigation = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$6, "Navigation_component_useStyles_IifmPGQx018"));
  const month = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [props2] = qwik.useLexicalScope();
    return new Date(props2.dateObj).toLocaleString(props2.locale, {
      month: "long"
    });
  }, "Navigation_component_month_useComputed_Usq8pA9lHR4", [
    props
  ]));
  const year = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [props2] = qwik.useLexicalScope();
    return new Date(props2.dateObj).getFullYear();
  }, "Navigation_component_year_useComputed_e3sELr0gSus", [
    props
  ]));
  if (props.view === "month")
    return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
      children: /* @__PURE__ */ qwik._jsxQ("div", null, {
        "qc-comp-id": "navigation",
        style: qwik._fnSignal((p0) => p0.styles, [
          props
        ], "p0.styles")
      }, [
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 1);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_Qgo7smtBKaM", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "«", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value, newDate.getMonth() - 1);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_1_HKyCOc2zRXQ", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "‹", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2] = qwik.useLexicalScope();
            props2.onChangeCurrentView$("year");
          }, "Navigation_component__Fragment_div_button_onClick_2_r4BT0i5EU74", [
            props
          ]),
          style: qwik._fnSignal((p0) => ({
            flexGrow: 1,
            ...p0.buttonStyles
          }), [
            props
          ], "{flexGrow:1,...p0.buttonStyles}")
        }, /* @__PURE__ */ qwik._jsxQ("span", null, null, [
          capitalizeFirstLetter(month.value),
          " ",
          qwik._fnSignal((p0) => p0.value, [
            year
          ], "p0.value")
        ], 1, null), 1, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value, newDate.getMonth() + 1);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_3_RTSJBJ2yaPU", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "›", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 1);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_4_2pwQNdTyH2w", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "»", 3, null)
      ], 1, null)
    }, 1, "OK_0");
  else if (props.view === "year")
    return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
      children: /* @__PURE__ */ qwik._jsxQ("div", null, {
        "qc-comp-id": "navigation",
        style: qwik._fnSignal((p0) => p0.styles, [
          props
        ], "p0.styles")
      }, [
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 10);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_5_JKS2S4oOemk", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "«", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 1);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_6_uAyRbiFN9Gg", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "‹", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2] = qwik.useLexicalScope();
            props2.onChangeCurrentView$("decade");
          }, "Navigation_component__Fragment_div_button_onClick_7_eE77pb6gfS8", [
            props
          ]),
          style: qwik._fnSignal((p0) => ({
            flexGrow: 1,
            ...p0.buttonStyles
          }), [
            props
          ], "{flexGrow:1,...p0.buttonStyles}")
        }, /* @__PURE__ */ qwik._jsxQ("span", null, null, qwik._fnSignal((p0) => p0.value, [
          year
        ], "p0.value"), 3, null), 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 1);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_8_63IaPnZUFSg", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "›", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 10);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_9_fzXGkcZVPkw", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "»", 3, null)
      ], 3, null)
    }, 3, "OK_1");
  else if (props.view === "decade")
    return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
      children: /* @__PURE__ */ qwik._jsxQ("div", null, {
        "qc-comp-id": "navigation",
        style: qwik._fnSignal((p0) => p0.styles, [
          props
        ], "p0.styles")
      }, [
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 100);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_10_pp59aFoYwe8", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "«", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 10);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_11_u4oeJgfiMVM", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "‹", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2] = qwik.useLexicalScope();
            props2.onChangeCurrentView$("century");
          }, "Navigation_component__Fragment_div_button_onClick_12_kkGYCT4vSj0", [
            props
          ]),
          style: qwik._fnSignal((p0) => ({
            flexGrow: 1,
            ...p0.buttonStyles
          }), [
            props
          ], "{flexGrow:1,...p0.buttonStyles}")
        }, /* @__PURE__ */ qwik._jsxQ("span", null, null, calculateDecade(year.value), 1, null), 1, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 10);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_13_MgN6bKARod4", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "›", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 100);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_14_HhHNXIHP0t0", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "»", 3, null)
      ], 1, null)
    }, 1, "OK_2");
  else if (props.view === "century")
    return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
      children: /* @__PURE__ */ qwik._jsxQ("div", null, {
        "qc-comp-id": "navigation",
        style: qwik._fnSignal((p0) => p0.styles, [
          props
        ], "p0.styles")
      }, [
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 1e3);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_15_mu6v6RhhFjs", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "«", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value - 100);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_16_ZEIA0SjnhJs", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "‹", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          style: qwik._fnSignal((p0) => ({
            flexGrow: 1,
            ...p0.buttonStyles
          }), [
            props
          ], "{flexGrow:1,...p0.buttonStyles}")
        }, /* @__PURE__ */ qwik._jsxQ("span", null, null, calculateCentury(year.value), 1, null), 1, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 100);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_17_WnQdDQz2k9A", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "›", 3, null),
        /* @__PURE__ */ qwik._jsxQ("button", null, {
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [props2, year2] = qwik.useLexicalScope();
            const newDate = new Date(props2.dateObj);
            newDate.setFullYear(year2.value + 1e3);
            props2.onChangeCurrentDate$(newDate.valueOf());
          }, "Navigation_component__Fragment_div_button_onClick_18_SQIjF9lfIF4", [
            props,
            year
          ]),
          style: qwik._fnSignal((p0) => p0.buttonStyles, [
            props
          ], "p0.buttonStyles")
        }, "»", 3, null)
      ], 1, null)
    }, 1, "OK_3");
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, null, 3, "OK_4");
}, "Navigation_component_ts5VFnLi8bQ"));
const css$5 = ":where([qc-comp-id='monthview']){\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n    height: 90%;\r\n    min-height: 220px;\r\n}";
const css$4 = ":where([qc-comp-id='weekdays']){\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    height: 10%;\r\n}\r\n\r\n:where([qc-comp-id='weekday']){\r\n    flex: 0 0 14.2857%;\r\n    overflow: hidden;\r\n    margin-inline-end: 0px;\r\n    padding: 0.5em;\r\n}";
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
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$4, "WeekDay_component_useStyles_3vNhaKsSX1M"));
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
const css$3 = ":where([qc-comp-id='days-div']){\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    height: 90%;\r\n}\r\n\r\n:where([qc-comp-id='day']), :where([qc-comp-id='prior-day']){\r\n    flex: 0 0 14.2857%;\r\n    overflow: hidden;\r\n    margin-inline-end: 0px;\r\n    \r\n    max-width: 100%;\r\n    padding: 10px 6.6667px;\r\n    background: none;\r\n    text-align: center;\r\n    line-height: 16px;\r\n}\r\n\r\n:where([qc-comp-id='prior-day']){\r\n    color: #757575;\r\n}\r\n";
const Day = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$3, "Day_component_useStyles_ak21olthqc0"));
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
  const thisDate = props.show === void 0 || props.show === true ? new Date(props.dateObj).getDate() : "";
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("button", null, {
      disabled: true,
      "qc-comp-id": "prior-day",
      style: qwik._fnSignal((p0) => p0.styles, [
        props
      ], "p0.styles")
    }, /* @__PURE__ */ qwik._jsxQ("abbr", null, null, thisDate, 1, null), 1, null)
  }, 1, "Tp_1");
}, "PriorDay_component_iAn9MsxFg0E"));
function getDaysSinceLastSunday(dateObj, show, styles) {
  qwik._jsxBranch();
  const days = [];
  const newDateObj = new Date(dateObj.valueOf());
  newDateObj.setDate(1);
  while (newDateObj.getDay() !== 0) {
    newDateObj.setDate(newDateObj.getDate() - 1);
    days.unshift(/* @__PURE__ */ qwik._jsxC(PriorDay, {
      dateObj: newDateObj.valueOf(),
      show,
      styles
    }, 3, newDateObj.valueOf()));
  }
  return days;
}
function getDaysUntilNextSaturday(dateObj, show, styles) {
  qwik._jsxBranch();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const newDateObj = new Date(year, month, 0);
  const days = [];
  const delta = 6 - newDateObj.getDay();
  for (let i = 0; i < delta; i++) {
    newDateObj.setDate(newDateObj.getDate() + 1);
    days.push(/* @__PURE__ */ qwik._jsxC(PriorDay, {
      dateObj: newDateObj.valueOf(),
      show,
      styles
    }, 3, newDateObj.valueOf()));
  }
  return days;
}
function getMonthLength(dateObj) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}
function getMonthDays(dateObj, dayProps) {
  qwik._jsxBranch();
  const newDate = new Date(dateObj);
  newDate.setDate(1);
  const days = [];
  const lens = getMonthLength(newDate);
  for (let i = 0; i < lens; i++) {
    days.push(/* @__PURE__ */ qwik._jsxC(Day, {
      dateObj: newDate.valueOf(),
      onClickDay$: dayProps.onClickDay$,
      get style() {
        return dayProps.style;
      },
      get dayTextColor() {
        return dayProps.dayTextColor;
      },
      get weekendTextColor() {
        return dayProps.weekendTextColor;
      },
      get todayBgColor() {
        return dayProps.todayBgColor;
      },
      [qwik._IMMUTABLE]: {
        dayTextColor: qwik._wrapProp(dayProps, "dayTextColor"),
        style: qwik._wrapProp(dayProps, "style"),
        todayBgColor: qwik._wrapProp(dayProps, "todayBgColor"),
        weekendTextColor: qwik._wrapProp(dayProps, "weekendTextColor")
      }
    }, 2, newDate.valueOf()));
    newDate.setDate(newDate.getDate() + 1);
  }
  return days;
}
const Days = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const newDate = new Date(props.dateObj);
  const daysSinceLastSunday = getDaysSinceLastSunday(newDate, props.showNeighbouringMonth, props.invalidDayStyles);
  const daysOfTheMonth = getMonthDays(newDate, {
    onClickDay$: props.onClickDay$,
    style: props.dayStyles,
    dayTextColor: props.dayTextColor,
    weekendTextColor: props.weekendTextColor,
    todayBgColor: props.todayBgColor
  });
  const daysUntilNextSaturday = getDaysUntilNextSaturday(newDate, props.showNeighbouringMonth, props.invalidDayStyles);
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
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$5, "MonthView_component_useStyles_4hMoRvpsKY4"));
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
        get showNeighbouringMonth() {
          return props.showNeighbouringMonth;
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
          showNeighbouringMonth: qwik._fnSignal((p0) => p0.showNeighbouringMonth, [
            props
          ], "p0.showNeighbouringMonth"),
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
const css$2 = ":where([qc-comp-id='yearview']){\r\n    height: 100%;\r\n}\r\n\r\n:where([qc-comp-id='yearview']) > div{\r\n    height: 100%;\r\n}";
const Month = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const thisDate = new Date(props.dateObj);
  const currentDate = /* @__PURE__ */ new Date();
  const currentMonthColor = props.currentMonthColor ? props.currentMonthColor : "#ffff76";
  const backgroundColor = thisDate.getFullYear() === currentDate.getFullYear() && thisDate.getMonth() === currentDate.getMonth() ? currentMonthColor : "transparent";
  return /* @__PURE__ */ qwik._jsxQ("button", {
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [props2, thisDate2] = qwik.useLexicalScope();
      props2.onChangeCurrentDate$(thisDate2.valueOf());
      props2.onChangeCurrentView$("month");
    }, "Month_component_button_onClick_2JWm0yld0Lk", [
      props,
      thisDate
    ]),
    style: {
      flex: "0 0 33.3333%",
      overflow: "hidden",
      marginInlineEnd: "0px",
      backgroundColor,
      ...props.styles
    }
  }, {
    "qc-comp-id": "tile"
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "40_0"), 0, "40_1");
}, "Month_component_ub9YHLVZ0hg"));
const YearView = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$2, "YearView_component_useStyles_Z0WZ7F85LDg"));
  const months = [];
  const baseDate = new Date(props.dateObj);
  for (let month = 0; month < 12; month++) {
    baseDate.setMonth(month);
    months.push(/* @__PURE__ */ qwik._jsxC(Month, {
      dateObj: baseDate.valueOf(),
      get currentMonthColor() {
        return props.currentMonthBgColor;
      },
      children: capitalizeFirstLetter(new Date(baseDate.valueOf()).toLocaleString(props.locale, {
        month: "long"
      })),
      onChangeCurrentDate$: props.onChangeCurrentDate$,
      onChangeCurrentView$: props.onChangeCurrentView$,
      [qwik._IMMUTABLE]: {
        currentMonthColor: qwik._fnSignal((p0) => p0.currentMonthBgColor, [
          props
        ], "p0.currentMonthBgColor")
      }
    }, 0, baseDate.valueOf()));
  }
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "yearview",
      style: qwik._fnSignal((p0) => p0.styles, [
        props
      ], "p0.styles")
    }, /* @__PURE__ */ qwik._jsxQ("div", null, {
      style: {
        display: "flex",
        flexWrap: "wrap"
      }
    }, months, 1, null), 1, null)
  }, 1, "40_2");
}, "YearView_component_fxoT5XR8af8"));
const css$1 = ":where([qc-comp-id='decadeview']){\r\n    height: 100%;\r\n}";
const Year = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const thisDate = new Date(props.dateObj);
  const currentDate = /* @__PURE__ */ new Date();
  const currentYearColor = props.currentYearColor ? props.currentYearColor : "#ffff76";
  const backgroundColor = thisDate.getFullYear() === currentDate.getFullYear() ? currentYearColor : "transparent";
  return /* @__PURE__ */ qwik._jsxQ("button", {
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [props2, thisDate2] = qwik.useLexicalScope();
      props2.onChangeCurrentDate$(thisDate2.valueOf());
      props2.onChangeCurrentView$("year");
    }, "Year_component_button_onClick_VZfiU51xaYs", [
      props,
      thisDate
    ]),
    style: {
      flex: "0 0 33.3333%",
      overflow: "hidden",
      marginInlineEnd: "0px",
      backgroundColor,
      ...props.styles
    }
  }, {
    "qc-comp-id": "tile"
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "06_0"), 0, "06_1");
}, "Year_component_l9Z31oes1Vc"));
const DecadeView = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$1, "DecadeView_component_useStyles_VM7XN0t0pnY"));
  const baseDate = new Date(props.dateObj);
  const firstYearOfTheDecade = getFirstYearOfTheDecade(baseDate.getFullYear());
  const anos = [];
  for (let ano = firstYearOfTheDecade; ano <= firstYearOfTheDecade + 9; ano++) {
    baseDate.setFullYear(ano);
    anos.push(/* @__PURE__ */ qwik._jsxC(Year, {
      dateObj: baseDate.valueOf(),
      get styles() {
        return props.yearStyles;
      },
      get currentYearColor() {
        return props.currentYearBgColor;
      },
      children: ano,
      onChangeCurrentDate$: props.onChangeCurrentDate$,
      onChangeCurrentView$: props.onChangeCurrentView$,
      [qwik._IMMUTABLE]: {
        currentYearColor: qwik._fnSignal((p0) => p0.currentYearBgColor, [
          props
        ], "p0.currentYearBgColor"),
        styles: qwik._fnSignal((p0) => p0.yearStyles, [
          props
        ], "p0.yearStyles")
      }
    }, 0, ano));
  }
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "decadeview",
      style: qwik._fnSignal((p0) => ({
        display: "flex",
        flexWrap: "wrap",
        ...p0.styles
      }), [
        props
      ], '{display:"flex",flexWrap:"wrap",...p0.styles}')
    }, anos, 1, null)
  }, 1, "06_2");
}, "DecadeView_component_sZQ6iAQ8ITQ"));
const css = ":where([qc-comp-id='centuryview']){\r\n    height: 100%;\r\n}";
const Decade = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const thisDate = new Date(props.dateObj);
  const currentDate = /* @__PURE__ */ new Date();
  const thisDecadeYear = thisDate.getFullYear();
  const currentYear = currentDate.getFullYear();
  const currentDecadeColor = props.currentYearColor ? props.currentYearColor : "#ffff76";
  const backgroundColor = currentYear >= getFirstYearOfTheDecade(thisDecadeYear) && currentYear <= getFirstYearOfTheDecade(thisDecadeYear) + 9 ? currentDecadeColor : "transparent";
  return /* @__PURE__ */ qwik._jsxQ("button", {
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [props2, thisDate2] = qwik.useLexicalScope();
      props2.onChangeCurrentDate$(thisDate2.valueOf());
      props2.onChangeCurrentView$("decade");
    }, "Decade_component_button_onClick_mI0014AeL8I", [
      props,
      thisDate
    ]),
    style: {
      flex: "0 0 33.3333%",
      overflow: "hidden",
      marginInlineEnd: "0px",
      backgroundColor,
      ...props.styles
    }
  }, {
    "qc-comp-id": "tile"
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "FZ_0"), 0, "FZ_1");
}, "Decade_component_DEHCrzDlwjg"));
const CenturyView = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css, "CenturyView_component_useStyles_lsMOoOcNWEY"));
  const baseDate = new Date(props.dateObj);
  const firstYearOfTheCentury = getFirstYearOfTheCentury(baseDate.getFullYear());
  const anos = [];
  for (let ano = firstYearOfTheCentury; ano <= firstYearOfTheCentury + 99; ano += 10) {
    baseDate.setFullYear(ano);
    anos.push(/* @__PURE__ */ qwik._jsxC(Decade, {
      dateObj: baseDate.valueOf(),
      get styles() {
        return props.decadeStyles;
      },
      get currentYearColor() {
        return props.currentYearBgColor;
      },
      children: calculateDecade(ano),
      onChangeCurrentDate$: props.onChangeCurrentDate$,
      onChangeCurrentView$: props.onChangeCurrentView$,
      [qwik._IMMUTABLE]: {
        currentYearColor: qwik._fnSignal((p0) => p0.currentYearBgColor, [
          props
        ], "p0.currentYearBgColor"),
        styles: qwik._fnSignal((p0) => p0.decadeStyles, [
          props
        ], "p0.decadeStyles")
      }
    }, 0, ano));
  }
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "centuryview",
      style: qwik._fnSignal((p0) => ({
        display: "flex",
        flexWrap: "wrap",
        ...p0.styles
      }), [
        props
      ], '{display:"flex",flexWrap:"wrap",...p0.styles}')
    }, anos, 1, null)
  }, 1, "FZ_2");
}, "CenturyView_component_R49KekJxdLQ"));
const Calendar = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(css$7, "Calendar_component_useStyles_RySDPue42WQ"));
  const locale = props.locale ? props.locale : "pt-br";
  const startingView = props.startingView ? props.startingView : "month";
  const currentView = qwik.useSignal(startingView);
  const currentDate = qwik.useSignal((/* @__PURE__ */ new Date()).valueOf());
  const onChangeCurrentDate$ = /* @__PURE__ */ qwik.inlinedQrl((newCurrentDate) => {
    const [currentDate2] = qwik.useLexicalScope();
    currentDate2.value = newCurrentDate;
  }, "Calendar_component_onChangeCurrentDate_ww4uyNjcUfU", [
    currentDate
  ]);
  const onChangeView$ = /* @__PURE__ */ qwik.inlinedQrl((newView) => {
    const [currentView2] = qwik.useLexicalScope();
    currentView2.value = newView;
  }, "Calendar_component_onChangeView_fzvWfCzkOqw", [
    currentView
  ]);
  let view;
  if (currentView.value === "month")
    view = /* @__PURE__ */ qwik._jsxC(MonthView, {
      locale,
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
      get showNeighbouringMonth() {
        return props.showNeighbouringMonth;
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
        showNeighbouringMonth: qwik._fnSignal((p0) => p0.showNeighbouringMonth, [
          props
        ], "p0.showNeighbouringMonth"),
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
    }, 2, "w3_0");
  else if (currentView.value === "year")
    view = /* @__PURE__ */ qwik._jsxC(YearView, {
      locale,
      get dateObj() {
        return currentDate.value;
      },
      get styles() {
        return props.yearViewStyles;
      },
      get monthStyles() {
        return props.monthStyles;
      },
      get currentMonthBgColor() {
        return props.todayBgColor;
      },
      onChangeCurrentDate$,
      onChangeCurrentView$: onChangeView$,
      [qwik._IMMUTABLE]: {
        currentMonthBgColor: qwik._fnSignal((p0) => p0.todayBgColor, [
          props
        ], "p0.todayBgColor"),
        dateObj: qwik._fnSignal((p0) => p0.value, [
          currentDate
        ], "p0.value"),
        monthStyles: qwik._fnSignal((p0) => p0.monthStyles, [
          props
        ], "p0.monthStyles"),
        onChangeCurrentDate$: qwik._IMMUTABLE,
        onChangeCurrentView$: qwik._IMMUTABLE,
        styles: qwik._fnSignal((p0) => p0.yearViewStyles, [
          props
        ], "p0.yearViewStyles")
      }
    }, 3, "w3_1");
  else if (currentView.value === "decade")
    view = /* @__PURE__ */ qwik._jsxC(DecadeView, {
      get dateObj() {
        return currentDate.value;
      },
      onChangeCurrentDate$,
      onChangeCurrentView$: onChangeView$,
      get styles() {
        return props.decadeViewStyles;
      },
      get yearStyles() {
        return props.yearStyles;
      },
      get currentYearBgColor() {
        return props.todayBgColor;
      },
      [qwik._IMMUTABLE]: {
        currentYearBgColor: qwik._fnSignal((p0) => p0.todayBgColor, [
          props
        ], "p0.todayBgColor"),
        dateObj: qwik._fnSignal((p0) => p0.value, [
          currentDate
        ], "p0.value"),
        onChangeCurrentDate$: qwik._IMMUTABLE,
        onChangeCurrentView$: qwik._IMMUTABLE,
        styles: qwik._fnSignal((p0) => p0.decadeViewStyles, [
          props
        ], "p0.decadeViewStyles"),
        yearStyles: qwik._fnSignal((p0) => p0.yearStyles, [
          props
        ], "p0.yearStyles")
      }
    }, 3, "w3_2");
  else
    view = /* @__PURE__ */ qwik._jsxC(CenturyView, {
      get dateObj() {
        return currentDate.value;
      },
      onChangeCurrentDate$,
      onChangeCurrentView$: onChangeView$,
      get styles() {
        return props.centuryViewStylse;
      },
      get decadeStyles() {
        return props.decadeStyles;
      },
      get currentYearBgColor() {
        return props.todayBgColor;
      },
      [qwik._IMMUTABLE]: {
        currentYearBgColor: qwik._fnSignal((p0) => p0.todayBgColor, [
          props
        ], "p0.todayBgColor"),
        dateObj: qwik._fnSignal((p0) => p0.value, [
          currentDate
        ], "p0.value"),
        decadeStyles: qwik._fnSignal((p0) => p0.decadeStyles, [
          props
        ], "p0.decadeStyles"),
        onChangeCurrentDate$: qwik._IMMUTABLE,
        onChangeCurrentView$: qwik._IMMUTABLE,
        styles: qwik._fnSignal((p0) => p0.centuryViewStylse, [
          props
        ], "p0.centuryViewStylse")
      }
    }, 3, "w3_3");
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "qc-comp-id": "calendar",
      style: qwik._fnSignal((p0) => p0.calendarStyles, [
        props
      ], "p0.calendarStyles")
    }, [
      props.hideNavigation ? /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, null, 3, "w3_4") : /* @__PURE__ */ qwik._jsxC(Navigation, {
        locale,
        get dateObj() {
          return currentDate.value;
        },
        get view() {
          return currentView.value;
        },
        onChangeCurrentDate$,
        onChangeCurrentView$: onChangeView$,
        get styles() {
          return props.navigationStyles;
        },
        get buttonStyles() {
          return props.navigationButtonStyles;
        },
        [qwik._IMMUTABLE]: {
          buttonStyles: qwik._fnSignal((p0) => p0.navigationButtonStyles, [
            props
          ], "p0.navigationButtonStyles"),
          dateObj: qwik._fnSignal((p0) => p0.value, [
            currentDate
          ], "p0.value"),
          onChangeCurrentDate$: qwik._IMMUTABLE,
          onChangeCurrentView$: qwik._IMMUTABLE,
          styles: qwik._fnSignal((p0) => p0.navigationStyles, [
            props
          ], "p0.navigationStyles"),
          view: qwik._fnSignal((p0) => p0.value, [
            currentView
          ], "p0.value")
        }
      }, 3, "w3_5"),
      view
    ], 1, null)
  }, 1, "w3_6");
}, "Calendar_component_9twM9FB8yQY"));
exports.Calendar = Calendar;
