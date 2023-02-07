import Button from '@mui/material/Button'
import React, { useState, useContext } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { EntriesContext } from '../../context/Entries/EntriesContext';
import { UiContext } from '@/context/UI/UiContext';
const NewEntry = () => {
    const { isAddingEntry, setIsAddingEntry } = useContext(UiContext)
    const { addEntry } = useContext(EntriesContext)
    const [inputValue, setInputValue] = useState('');
    const [Touched, setTouched] = useState(false);

    const onSave = () => {
        if (inputValue.length === 0) return;
        addEntry(inputValue)
        // setIsAdding(false)
        setInputValue('')
    }

    return (
        <Box sx={{
            marginBottom: 2, paddingX: 2, paddingY: 2
        }}>
            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                marginTop: 2,
                            }}
                            placeholder='New Entry'
                            autoFocus
                            multiline
                            label="Add Entry"
                            value={inputValue}
                            helperText={Touched && inputValue.length <= 0 ? 'Please enter a value' : ''}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={Touched && inputValue.length <= 0}
                        />
                        <Box display="flex" justifyContent={'space-between'}>
                            <Button variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />} onClick={onSave}>
                                Save
                            </Button>
                            <Button variant='outlined' color='error' endIcon={<CancelIcon />} onClick={() => setIsAddingEntry(false)}>
                                Cancel
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<AddIcon />}
                        variant='outlined'
                        fullWidth
                        color='primary'
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Add Entry
                    </Button>
                )
            }




        </Box>
    )
}

export default NewEntry