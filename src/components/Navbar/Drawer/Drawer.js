'use client'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function DrawerCustom({ links }) {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        setIsOpen(!isOpen)
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {links.map((link) => (
                    <ListItem button key={link.path}>
                        <ListItemButton>
                            <ListItemIcon>
                                {link.path === '/estrenos' ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <Button className='!p-0' onClick={toggleDrawer(true)}>
                <Hamburger color='red' size={18}  toggle={toggle} toggled={isOpen} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}