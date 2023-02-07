import { List, Paper } from '@mui/material'
import React, { useContext, useMemo, DragEvent } from 'react'
import EntryCard from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '../../context/Entries/EntriesContext';
import { UiContext } from '@/context/UI/UiContext';
import styles from '../../styles/EntryList.module.css'
interface Props {
    status: EntryStatus
}

const EntryList = ({ status }: Props) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UiContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text/plain");
        const entry = entries.find(entry => entry._id === id);
        console.log(status)
        if (!entry) return;

        entry.status = status;
        updateEntry(entry)
        endDragging()

    }

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        // TODO: Aqui Haremos DROP
        <div
            onDrop={onDrop}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ""}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: "transparent", padding: "1px 5px" }}>
                {/* TODO: CAMBIARA DEPENDIENDO SI ESTOY HACIENDO DRAG O NO */}
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all 0.3s" }}>
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