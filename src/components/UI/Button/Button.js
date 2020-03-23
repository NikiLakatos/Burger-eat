import React from 'react'
import styled from './Button.module.css'

const button = (props) => (

<button onClick={props.clickedSomeAction}
        className={[styled.Button, styled[props.btnType]].join(' ')}>{props.children}</button>
);

export default button;