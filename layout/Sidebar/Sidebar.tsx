import {ReactElement} from "react";
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import classNames from 'classnames';
import Menu from "../Menu/Menu";

function Sidebar({...props}: SidebarProps): ReactElement {
    return (
        <div {...props}>
            <Menu/>
        </div>
    )
}

export default Sidebar;