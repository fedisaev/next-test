import {ParagraphProps} from "./Paragraph.props";
import styles from './Paragraph.module.css';
import classNames from 'classnames';
import {ReactElement} from "react";

function Paragraph({children = 'm', size, className, ...props}: ParagraphProps): ReactElement {
    return (
        <p className={classNames(styles.paragraph, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        })} {...props}>
            {children}
        </p>
    );
}

export default Paragraph;