import { UiState } from "./UiProvider";

type UiActionType = { type: "[Ui] - TOGGLE_SIDE_MENU" };

export const UiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[Ui] - TOGGLE_SIDE_MENU":
      return {
        ...state,
        sideMenuOpen: !state.sideMenuOpen,
      };

    default:
      return state;
  }
};
