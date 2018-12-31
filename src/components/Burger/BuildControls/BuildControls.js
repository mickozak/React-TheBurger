import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuilControl/BuildControl'
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={()=>props.ingredientAdded(ctrl.type)}
                />
            })}
        </div>
    )
}

export default buildControls