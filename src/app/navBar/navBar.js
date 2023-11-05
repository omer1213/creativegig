
'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';


const drawerWidth = 240;


const navItems = [
    {
        title: "Home",
        href: "home2"
    }
    ,
    {
        title: "How It Works",
        href: "about"
    },
    {
        title: "Become Our Partners",
        href: "project"
    },
    {
        title: "Conatact Us",
        href: "contact"
    }
]

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={'/logo.png'} width={140} height={60} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            {/* <ListItemText primary={item} /> */}
                            <ListItemText>
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6" sx={{ my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{
                    backgroundColor: '#FF35F7'

                }} sx={{ color: 'white', display: { xs: 'none', md: 'block' }, display: 'flex', justifyItem: 'center', alignItems: 'center' }}>
                    Get a Quote <ArrowForwardIcon sx={{ marginLeft: '8px' }} />
                </Button>
            </Typography>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ color: 'black', bgcolor: 'white' }}>
                    <Toolbar sx={{ marginLeft: { md: '10%' }, marginRight: { md: '10%' } }} >
                        {/* this section is for mobile view */}
                        <IconButton
                            // color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: {
                                    xs: 'flex', // Apply these styles on extra small (mobile) screens
                                    sm: 'none', // Hide on small screens and above
                                },
                                width: '100%',
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between'
                            }}
                        >
                            <MenuIcon />
                            <Image src={'/logo.png'} width={140} height={60} />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Image src={'/logo.png'} width={140} height={60} />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item, index) => (
                                <Button key={index} sx={{ color: 'black', fontFamily: "Inter", marginLeft: '16px', fontSize: '14px' }} >
                                    <Link href={item.href}>{item.title}</Link>
                                </Button>
                            ))}
                        </Box>
                        <Button style={{
                            backgroundColor: '#FF35F7'

                        }} sx={{ color: 'white', display: { xs: 'none', md: 'block' }, display: 'flex', justifyItem: 'center', alignItems: 'center' }}>
                            Get a Quote <ArrowForwardIcon sx={{ marginLeft: '8px' }} />
                        </Button>

                    </Toolbar>
                </AppBar>
                <nav>

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >

                        {drawer}
                    </Drawer>
                </nav>

            </Box>
        </>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;