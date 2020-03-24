import React from 'react';

import styled from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={styled.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;