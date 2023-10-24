import { CSSProperties, PropFunction } from "@builder.io/qwik";
export interface CenturyViewProps {
    dateObj: number;
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>;
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>;
    styles?: CSSProperties;
    decadeStyles?: CSSProperties;
    currentYearBgColor?: string;
}
export declare const CenturyView: import("@builder.io/qwik").Component<CenturyViewProps>;
