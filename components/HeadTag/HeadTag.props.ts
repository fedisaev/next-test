import {ReactNode} from "react";

export interface HeadTagProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}