import React from 'react'
import styled from './Logo.module.css'
import burgerLogo from '../../assets/images/original.png'

const logo = (props) =>(

    <div className={styled.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt='Burger' />
    </div>

);

export default logo