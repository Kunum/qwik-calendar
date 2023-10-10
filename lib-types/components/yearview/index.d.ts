import { CSSProperties, PropFunction } from "@builder.io/qwik";
export interface YearViewProps {
    locale: string;
    dateObj: number;
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>;
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>;
    styles?: CSSProperties;
    monthStyles?: CSSProperties;
    currentMonthBgColor?: string;
}
export declare const YearView: import("@builder.io/qwik").Component<YearViewProps>;
