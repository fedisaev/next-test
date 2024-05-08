import {MyButtonProps} from "./MyButton.props";
import styles from './MyButton.module.css';
import classNames from 'classnames';
import {ReactElement} from "react";

function MyButton({children, arrow = 'none', appearance, className, ...props}: MyButtonProps): ReactElement {
    return (
        <button className={classNames(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })} {...props}>
            {children}
            {arrow !== 'none' && (
                    <span className={classNames(styles.arrow, {
                        [styles.down]: arrow === 'down'
                    })}>
                        <img src='/arrow.svg' alt="arrow"/>
                    </span>)
            }
        </button>
    );
}

export default MyButton;