import {ReactElement, useContext} from "react";
import styles from './Menu.module.css';
import classNames from 'classnames';
import {AppContext} from "../../context/app.context";

function Menu(): ReactElement {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    return (
        <div>
            <ul>
                {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
            </ul>
        </div>
    )
}

export default Menu;