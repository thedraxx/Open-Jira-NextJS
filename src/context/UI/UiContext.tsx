import { createContext } from "react";

interface UiContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    // Methods
    toggleSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
};

export const UiContext = createContext({} as UiContextProps);

