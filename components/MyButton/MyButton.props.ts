import {HTMLAttributes, ReactNode} from "react";

export interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}