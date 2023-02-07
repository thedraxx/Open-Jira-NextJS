import { UiState } from "./UiProvider";

type UiActionType =
  | { type: "[Ui] - TOGGLE_SIDE_MENU" }
  | { type: "[Ui] - IS_CHANGE_ENTRY"; payload: boolean }
  | { type: "[Ui] - START_DRAGGING" }
  | { type: "[Ui] - END_DRAGGING" };

export const UiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[Ui] - TOGGLE_SIDE_MENU":
      return {
        ...state,
        sideMenuOpen: !state.sideMenuOpen,
      };

    case "[Ui] - IS_CHANGE_ENTRY":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "[Ui] - START_DRAGGING":
      return {
        ...state,
        isDragging: true,
      };

    case "[Ui] - END_DRAGGING":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
