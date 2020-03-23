import React from 'react'
import styled from './Backdrop.module.css'

const backdrop = (props) => (
    props.show ? <div className={styled.Backdrop} onClick={props.clicked} ></div> : null
);

export default backdrop