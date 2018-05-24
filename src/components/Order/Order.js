import React from 'react';

import '../../index.css'

const order = (props) => {
    /*converting ingredients to array, same as in Burger.js but shorter*/
    const ingrs = [];
    for ( let ingredientName in props.ingredients ){
        ingrs.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingrs.map(ig => {
        return <span className="ingr" key={ig.name}>{ig.name} ( {ig.amount} )</span>
    });

    return (
        <div className="Order">
            <p>Name: <strong>{props.buyer}</strong></p>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD: {props.price.toFixed(2) /* here we can add Number.parseFloat(props.price).toFixed(2) */  }</strong> </p>
            <p className="when">Ordered: {props.ordered}</p>
            <p className="when">at: {props.time}</p>
        </div>
    );
};

export default order;
