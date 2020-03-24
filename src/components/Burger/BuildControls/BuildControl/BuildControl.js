import React from 'react';

import styled from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={styled.BuildControl}>
        <div className={styled.Label}>{props.label}</div>
        <button 
            className={styled.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button 
            className={styled.More} 
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;