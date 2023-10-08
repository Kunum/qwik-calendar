import { CSSProperties, PropFunction } from "@builder.io/qwik";
export interface NavigationProps {
    locale: string;
    dateObj: number;
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>;
    styles?: CSSProperties;
}
export declare const Navigation: import("@builder.io/qwik").Component<NavigationProps>;
