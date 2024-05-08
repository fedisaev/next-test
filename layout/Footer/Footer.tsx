import {ReactElement} from "react";
import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import classNames from 'classnames';

function Footer({...props}: FooterProps): ReactElement {
    return (
        <div {...props}>
            Footer
        </div>
    )
}

export default Footer;