/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer, useEffect } from 'react';
import { EntriesContext } from './EntriesContext';
import { EntriesReducer } from './EntriesReducer';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { darkTheme } from '@/themes';
import { entriesAPI } from '@/apis';


export interface entriesState {
    entries: Entry[];
}

const entries_INITIAL_STATE: entriesState = {
    entries: [],
};

interface Props {
    children: React.ReactNode;
}

export const EntriesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(EntriesReducer, entries_INITIAL_STATE);

    const refreshEntries = async () => {
        const { data } = await entriesAPI<Entry[]>('/entries');

        dispatch({
            type: "[Entries] - Refresh-Data",
            payload: data,
        });
    }

    useEffect(() => {
        refreshEntries();
    }, [])


    const addEntry = async (description: string) => {

        // const newEntry: Entry = {
        //     _id: uuidv4(),
        //     description: description,
        //     createdAt: Date.now(),
        //     status: 'pending',
        // }
        const { data } = await entriesAPI.post<Entry>('/entries', {
            description,
            createdAt: Date.now(),
        })

        dispatch({
            type: "[Entries] - Add-Entry",
            payload: data,
        });
    };

    // Cambia el estado de una entrada (pending, completed, in progress)
    const updateEntry = async (entry: Entry) => {

        try {

            const { data } = await entriesAPI.put<Entry>(`/entries/${entry._id}`, entry)

            dispatch({
                type: "[Entries] - Entry-Updated",
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }


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