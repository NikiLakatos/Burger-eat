import React from 'react'
import styled from './BuildControl.module.css'

const buildControl = (props) => (
    
    <div className={styled.BuildControl}>
        <div className={styled.Label}>{props.label}</div>
        <button onClick={props.removed} className={styled.Less} disabled={props.disabled} >Less</button>
        <button onClick={props.added} className={styled.More}>More</button>
    </div>
);

export default buildControl