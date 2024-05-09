import {ReactElement} from "react";
import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import classNames from 'classnames';
import {format} from 'date-fns';

function Footer({className, ...props}: FooterProps): ReactElement {
    return (
        <footer className={classNames(className, styles.footer)} {...props}>
            <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Политика конфиденциальности</a>
        </footer>
    )
}

export default Footer;