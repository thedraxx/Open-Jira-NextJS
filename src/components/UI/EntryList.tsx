import { List, Paper } from '@mui/material'
import React, { useContext, useMemo, DragEvent } from 'react'
import EntryCard from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '../../context/Entries/EntriesContext';

interface Props {
    status: EntryStatus
}

const EntryList = ({ status }: Props) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text/plain");
        console.log(id);
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        // TODO: Aqui Haremos DROP
        <div
            onDrop={onDrop}
            onDragOver={allowDrop}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: "transparent", padding: "1px 5px" }}>
                {/* TODO: CAMBIARA DEPENDIENDO SI ESTOY HACIENDO DRAG O NO */}
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}

export default EntryList