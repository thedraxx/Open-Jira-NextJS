import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuOpenOutlined from '@mui/icons-material/MenuOpenOutlined'
import { UiContext } from '@/context/UI/UiContext'

const Navbar = () => {

    const { toggleSideMenu } = useContext(UiContext)

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size='large' edge='start' onClick={toggleSideMenu} >
                    <MenuOpenOutlined />
                </IconButton>
                <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                    OpenJira
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar