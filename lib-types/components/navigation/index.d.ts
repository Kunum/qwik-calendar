import { PropFunction } from "@builder.io/qwik";
export interface NavigationProps {
    locale: string;
    dateObj: number;
    onChangeCurrentDate$: PropFunction<(newCurrentDate: number) => void>;
}
export declare const Navigation: import("@builder.io/qwik").Component<NavigationProps>;
