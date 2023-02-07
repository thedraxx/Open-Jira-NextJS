import { Entry } from "@/interfaces";
import { entriesState } from "./EntriesProvider";

type EntriesActionType =
  | { type: "[Entries] - Add-Entry"; payload: Entry }
  | { type: "[Entries] - Entry-Updated"; payload: Entry };

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

    case "[Entries] - Entry-Updated":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            return action.payload;
          } else {
            return entry;
          }
        }),
      };

    default:
      return state;
  }
};
