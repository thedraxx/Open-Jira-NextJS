import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface UIContextProps {
    entries: Entry[];

    // Methods
    addEntry: (description: string) => void;
    updateEntry(entry: Entry, showSnackBar: boolean): void;
}

export const EntriesContext = createContext({} as UIContextProps);