import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx/Auxx';

const sideDrawer = ( props ) => {
    let attachedClasses = [styled.SideDrawer, styled.Close];
    if (props.open) {
        attachedClasses = [styled.SideDrawer, styled.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styled.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;