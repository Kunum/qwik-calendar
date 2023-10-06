import { PropFunction } from "@builder.io/qwik";
export interface DayProps {
    dateObj: number;
    onClickDay$?: PropFunction<(day: Date) => void>;
}
export interface PriorDayProps {
    dateObj: number;
}
export interface DaysProps {
    dateObj: number;
    onClickDay$?: (day: Date) => void;
}
export declare const Days: import("@builder.io/qwik").Component<DaysProps>;
