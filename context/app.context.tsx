import {createContext, PropsWithChildren, ReactElement, ReactNode, useState} from "react";
import {MenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Course});

export const AppContextProvider = (
    {menu, firstCategory, children}: PropsWithChildren<IAppContext>
): ReactElement => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    }
    return (
        <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
            {children}
        </AppContext.Provider>)
}














