import {ReactElement} from "react";
import {HeaderProps} from "./Header.props";
import styles from './Header.module.css';
import classNames from 'classnames';

function Header({...props}: HeaderProps): ReactElement {
    return (
        <div {...props}>
            Header
        </div>
    )
}

export default Header;