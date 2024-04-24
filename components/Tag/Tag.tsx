import {TagProps} from "./Tag.props";
import classNames from 'classnames';
import styles from './Tag.module.css';

function Tag({children, className, href, size = 's', color = 'ghost', ...props}: TagProps) {
    return (
        <div className={classNames(styles.tag, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.gray]: color === 'gray',
            [styles.primary]: color === 'primary'
        })} {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
}

export default Tag;