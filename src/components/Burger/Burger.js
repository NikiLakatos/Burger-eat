import React from 'react'
import styled from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
            .map((igKey) =>{
                return [...Array(props.ingredients[igKey])].map((_ , index) =>{
                   return <BurgerIngredient key={igKey + index} type={igKey} />
                });
            })
            .reduce((arrFirst, elCurrently) => {
                    return arrFirst.concat(elCurrently)
            }, []);
            
            if(transformedIngredients.length === 0){
                transformedIngredients = <h3>Please start adding ingredients!</h3>
            }
    return (
        <div className={styled.Burger}>
            <BurgerIngredient type='bread-top' />
                {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />

        </div>
    );
}

export default burger