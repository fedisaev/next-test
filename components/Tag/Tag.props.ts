import {HTMLAttributes, ReactNode} from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}