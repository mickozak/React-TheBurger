import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuilControl/BuildControl'


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.priceProperty.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={()=>props.ingredientAdded(ctrl.type)}
                    removed={()=>props.ingredientRemoved(ctrl.type)}
                    disalbled={props.disabled[controls.type]}
                />
            })}
        <button 
            disabled={!props.purchanable}
            className={classes.OrderButton}
            onClick={props.ordered}>{props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>    
        </div>
    )
}

export default buildControls