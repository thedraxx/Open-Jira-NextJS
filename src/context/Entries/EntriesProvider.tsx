/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { EntriesReducer } from './EntriesReducer';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { darkTheme } from '@/themes';


export interface entriesState {
    entries: Entry[];
}

const entries_INITIAL_STATE: entriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "pending: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum ipsa ut harum enim reprehenderit quis facilis aliquid placeat officia at quibusdam fuga dignissimos saepe inventore adipisci deleniti, nam labore.",
            createdAt: Date.now(),
            status: "pending",
        },
        {
            _id: uuidv4(),
            description: "in-progress: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum ipsa ut harum enim reprehenderit quis facilis aliquid placeat officia at quibusdam fuga dignissimos saepe inventore adipisci deleniti, nam labore.",
            createdAt: Date.now(),
            status: "in-progress",
        },
        {
            _id: uuidv4(),
            description: "finished: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum ipsa ut harum enim reprehenderit quis facilis aliquid placeat officia at quibusdam fuga dignissimos saepe inventore adipisci deleniti, nam labore.",
            createdAt: Date.now(),
            status: "finished",
        }
    ],
};

interface Props {
    children: React.ReactNode;
}

export const EntriesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(EntriesReducer, entries_INITIAL_STATE);


    const addEntry = (description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending',
        }

        dispatch({
            type: "[Entries] - Add-Entry",
            payload: newEntry,
        });
    };

    const updateEntry = (entry: Entry) => {
        dispatch({
            type: "[Entries] - Entry-Updated",
            payload: entry,
        })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}