import React from 'react';

import styled from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={styled.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styled.Logo}>
            <Logo />
        </div>
        <nav className={styled.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;