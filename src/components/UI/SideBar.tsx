import { Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import React, { useContext } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { UiContext } from '@/context/UI/UiContext';
const menuItems = [
    "inbox",
    "starred",
    "snoozed",
    "sent",
    "drafts",
]

const SideBar = () => {

    const { toggleSideMenu, sideMenuOpen } = useContext(UiContext)

    return (
        <Drawer
            anchor='left'
            open={sideMenuOpen}
            onClose={() => toggleSideMenu()}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant='h3'>
                        Menu
                    </Typography>
                </Box>
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItemButton key={index}  >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />

                            </ListItemButton>
                        ))
                    }
                </List>

                <Divider />
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItemButton key={index}  >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />

                            </ListItemButton>
                        ))
                    }
                </List>
            </Box>

        </Drawer>
    )
}

export default SideBar
