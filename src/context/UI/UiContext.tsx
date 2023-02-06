import { createContext } from "react";

interface UiContextProps {
    sideMenuOpen: boolean;
    // Methods
    toggleSideMenu: () => void;
};

export const UiContext = createContext({} as UiContextProps);

