import { useReducer } from 'react';
import { UiReducer } from './UiReducer';
import { UiContext } from './UiContext';

export interface UiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const Ui_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDragging: false
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

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({
            type: '[Ui] - IS_CHANGE_ENTRY',
            payload: isAdding
        })
    }

    const startDragging = () => {
        dispatch({
            type: '[Ui] - START_DRAGGING'
        })
    }

    const endDragging = () => {
        dispatch({
            type: '[Ui] - END_DRAGGING'
        })
    }


    return (
        <UiContext.Provider value={{
            ...state,
            toggleSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging
        }}>
            {children}
        </UiContext.Provider>
    )
}