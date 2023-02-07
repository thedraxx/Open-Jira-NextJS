import { Entry } from "@/interfaces";
import { entriesState } from "./EntriesProvider";

type EntriesActionType = {
  type: "[Entries] - Add-Entry";
  payload: Entry;
};

export const EntriesReducer = (
  state: entriesState,
  action: EntriesActionType
): entriesState => {
  switch (action.type) {
    case "[Entries] - Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
