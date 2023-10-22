import { CSSProperties, PropFunction } from "@builder.io/qwik";
export interface DecadeViewProps {
    dateObj: number;
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>;
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>;
    styles?: CSSProperties;
    yearStyles?: CSSProperties;
    currentYearBgColor?: string;
}
export declare const DecadeView: import("@builder.io/qwik").Component<DecadeViewProps>;
