import React, { DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { Entry } from '../../interfaces/entry';
import { UiContext } from '@/context/UI/UiContext';

interface Props {
    entry: Entry
}


const EntryCard = ({ entry }: Props) => {

    const { startDragging, endDragging } = useContext(UiContext)

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData("text/plain", entry._id);
        // TODO: Modificar el estado para indicar que se esta arrastrando un elemento
        startDragging()

    }

    const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
        // TODO: Modificar el estado para indicar que se termino de arrastrar un elemento
        endDragging()
    }


    return (
        <Card
            sx={{ marginBottom: 1 }}
            // Eventos Drag
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" component="h2" sx={{
                        fontWeight: 600,
                        whiteSpace: "pre-line",

                    }}>
                        {entry.description}
                    </Typography>
                </CardContent>

                <CardActions sx={{
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: 1,
                }}>
                    <Typography variant="body2" component="p">
                        Hace 30 minutos
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default EntryCard