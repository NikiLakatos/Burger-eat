import React from 'react'
import styled from './NavigationItem.module.css'

const navigationItem = (props) =>(
    <li className={styled.NavigationItem}>
        <a href={props.link} className={props.active ? styled.active : null}> 
            {props.children} </a>
    </li>
);

export default navigationItem;