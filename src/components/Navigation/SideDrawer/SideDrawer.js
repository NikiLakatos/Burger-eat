import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styled from './SideDrawer.module.css'

const sideDrawer = (props) =>{

    return(
        <div className={styled.SideDrawer}>
            <div className={styled.Logo}>
                <Logo  />
            </div>
            <nav>
                <NavigationItems />
            </nav>

        </div>
    );
};

export default sideDrawer