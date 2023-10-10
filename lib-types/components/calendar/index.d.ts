import { CSSProperties } from "@builder.io/qwik";
export interface CalendarProps {
    onClickDay$?: (day: Date) => void;
    calendarStyles?: CSSProperties;
    navigationStyles?: CSSProperties;
    monthViewStyles?: CSSProperties;
    yearViewStyles?: CSSProperties;
    dayStyles?: CSSProperties;
    monthStyles?: CSSProperties;
    daysStyles?: CSSProperties;
    invalidDayStyles?: CSSProperties;
    dayTextColor?: string;
    weekendTextColor?: string;
    todayBgColor?: string;
    locale?: string;
    hideNavigation?: boolean;
    showNeighbouringMonth?: boolean;
    startingView?: string;
}
export declare const Calendar: import("@builder.io/qwik").Component<CalendarProps>;
