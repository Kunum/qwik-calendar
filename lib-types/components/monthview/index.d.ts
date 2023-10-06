export interface MonthViewProps {
    locale: string;
    dateObj: number;
    onClickDay$?: (day: Date) => void;
}
export declare const MonthView: import("@builder.io/qwik").Component<MonthViewProps>;
