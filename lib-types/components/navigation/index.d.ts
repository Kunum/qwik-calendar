import { CSSProperties, PropFunction } from "@builder.io/qwik";
export interface NavProps {
    locale: string;
    dateObj: number;
    view: string;
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>;
    onChangeCurrentView$: PropFunction<(newCurrentView: string) => void>;
    styles?: CSSProperties;
    buttonStyles?: CSSProperties;
}
export declare const Navigation: import("@builder.io/qwik").Component<NavProps>;
