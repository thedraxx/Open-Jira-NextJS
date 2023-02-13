import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout';
import { capitalize, Card, Grid, CardHeader, CardContent, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryStatus } from '@/interfaces';
import DeletedOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const validStatus: EntryStatus[] = ["finished", "pending", "in-progress"]

const EntryPage = () => {

    const [inputValue, setInputValue] = useState("")
    const [status, setStatus] = useState<EntryStatus>("pending")
    const [touched, setTouched] = useState(false);

    const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as EntryStatus)
    }

    const onSave = () => {
        if (inputValue.length === 0) return;
        setTouched(true)
        console.log(inputValue, status)
    }

    return (
        <Layout title='.......'>
            <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`${inputValue}`}
                            subheader={`Creada hace .... minutos`} />
                        <CardContent>
                            <TextField
                                sx={{
                                    width: '100%',
                                    marginTop: 2,
                                    marginBottom: 2
                                }}
                                fullWidth
                                placeholder='new input'
                                autoFocus
                                multiline
                                label="new input"
                                value={inputValue}
                                onChange={onInputValueChange}
                            />
                            {/** RADIO */}
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {
                                        validStatus.map((option) => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={capitalize(option)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveOutlinedIcon />}
                                variant="contained"
                                fullWidth
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    backgroundColor: "error.dark",
                }}
            >
                <DeletedOutlinedIcon />
            </IconButton>
        </Layout>
    )
}

export default EntryPage