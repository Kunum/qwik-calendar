import { PropFunction, CSSProperties } from "@builder.io/qwik";
export interface DayProps {
    dateObj: number;
    onClickDay$?: PropFunction<(day: Date) => void>;
    style?: CSSProperties;
    dayTextColor?: string;
    weekendTextColor?: string;
    todayBgColor?: string;
}
export interface PriorDayProps {
    dateObj: number;
    styles?: CSSProperties;
}
export interface DaysProps {
    dateObj: number;
    onClickDay$?: (day: Date) => void;
    styles?: CSSProperties;
    dayStyles?: CSSProperties;
    invalidDayStyles?: CSSProperties;
    dayTextColor?: string;
    weekendTextColor?: string;
    todayBgColor?: string;
}
export declare const Days: import("@builder.io/qwik").Component<DaysProps>;
