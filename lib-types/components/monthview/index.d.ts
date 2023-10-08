import { CSSProperties } from "@builder.io/qwik";
export interface MonthViewProps {
    locale: string;
    dateObj: number;
    onClickDay$?: (day: Date) => void;
    styles?: CSSProperties;
    dayStyles?: CSSProperties;
    daysStyles?: CSSProperties;
    invalidDayStyles?: CSSProperties;
    dayTextColor?: string;
    weekendTextColor?: string;
    todayBgColor?: string;
}
export declare const MonthView: import("@builder.io/qwik").Component<MonthViewProps>;
