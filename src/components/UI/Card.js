import React from 'react'
import  './Card.css';
import '../expenses/ExpenseItem.css';
function Card(props) {
    const classes = 'card' + ' ' + props.className ;

    console.log(props.className)
    return (
        <div className={classes}>{props.children}</div>

    );
}

export default Card
