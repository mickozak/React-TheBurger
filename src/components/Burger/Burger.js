import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngrediens/BurgerIngredient'

const burger = (props) =>{
    //Transformuje obiekt na tablicę
    let transformIngredients = Object.keys(props.ingredients)
    //Dodaje wartość - wartość
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])]
        //Zmienia undefined
        .map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        })
    })
    //Redukuje elementy tablicy
    .reduce((preValue,currentValue)=>{
        return preValue.concat(currentValue)
    }, [])
    console.log(transformIngredients)
    if(transformIngredients.length===0){
        transformIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger