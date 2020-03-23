import React from 'react'
import styled from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];



const buildControls = (props) => (

            
    <div className={styled.BuildControls}>
        <h3>Current Price <strong>{props.price.toFixed(2)}</strong> $</h3>
        {controls.map((cnt) =>{
            return <BuildControl 
                        key={cnt.label} 
                        label={cnt.label}
                        added={ () => props.ingredientAdded(cnt.type)}
                        removed={ () => props.ingredientRemove(cnt.type)}
                        disabled={props.disabled[cnt.type]} />
        })}
        <button 
            className={styled.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >ORDER NOW</button>

    </div>
);

export default buildControls