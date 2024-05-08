import {ReactElement} from "react";
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import classNames from 'classnames';

function Sidebar({...props}: SidebarProps): ReactElement {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}

export default Sidebar;