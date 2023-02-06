import { useReducer } from 'react';
import { UiReducer } from './UiReducer';
import { UiContext } from './UiContext';


export interface UiState {
    sideMenuOpen: boolean;
}

const Ui_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
};

interface Props {
    children: React.ReactNode;
}

export const UiProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(UiReducer, Ui_INITIAL_STATE)

    const toggleSideMenu = () => {
        dispatch({
            type: '[Ui] - TOGGLE_SIDE_MENU'
        })
    }

    return (
        <UiContext.Provider value={{
            ...state,
            toggleSideMenu
        }}>
            {children}
        </UiContext.Provider>
    )
}