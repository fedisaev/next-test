import {ReactElement, useContext} from "react";
import styles from './Menu.module.css';
import classNames from 'classnames';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import {TopLevelCategory} from "../../interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Courses', icon: '/courses.svg', id: TopLevelCategory.Courses},
    {route: 'services', name: 'Services', icon: '/services.svg', id: TopLevelCategory.Services},
    {route: 'books', name: 'Books', icon: '/books.svg', id: TopLevelCategory.Books},
    {route: 'products', name: 'Products', icon: '/products.svg', id: TopLevelCategory.Products},

];

function Menu(): ReactElement {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    function buildFirstLevel() {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={classNames(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                <img src={m.icon} alt={m.name} />
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        )
    }

    function buildSecondLevel(menuItem: FirstLevelMenuItem) {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={classNames(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    function buildThirdLevel(pages: PageItem[], route: string) {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={classNames(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            ))
        )
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}

export default Menu;