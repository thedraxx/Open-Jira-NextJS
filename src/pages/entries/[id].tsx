import React, { useState, useMemo, useContext } from 'react'
import Layout from '../../components/layouts/Layout';
import { capitalize, Card, Grid, CardHeader, CardContent, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryStatus } from '@/interfaces';
import DeletedOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { GetServerSideProps } from 'next'
import { dbEntries } from '@/database';
import { Entry } from '../../interfaces/entry';
import { EntriesContext } from '@/context/Entries/EntriesContext';
import { getFormatDistanceToNow } from '@/utils/DateFunctions';

const validStatus: EntryStatus[] = ["finished", "pending", "in-progress"]

interface Props {
    entry: Entry
}


const EntryPage = ({ entry }: Props) => {

    const { updateEntry } = useContext(EntriesContext)


    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [touched, inputValue])

    const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as EntryStatus)
    }

    const onSave = () => {
        if (inputValue.length === 0) return;
        setTouched(true)
        updateEntry({
            ...entry,
            description: inputValue,
            status
        }, true);
    }

    return (
        <Layout title={inputValue.substring(0, 20) + "..."}>
            <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada:`}
                            subheader={getFormatDistanceToNow(entry.createdAt)} />
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
                                onBlur={() => setTouched(true)}
                                onFocus={() => setTouched(false)}
                                helperText={isNotValid ? "El campo es requerido" : ""}
                                error={isNotValid}
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
                                disabled={isNotValid}
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


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const entry = await dbEntries.getEntryById(ctx.params?.id as string);

    if (!entry) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}

export default EntryPage