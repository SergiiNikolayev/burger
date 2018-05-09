import React from 'react';
import '../../index.css';

import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';


const burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients) // .keys gives us an array of keys that contains string salad, string cheese and so on, the values 1,2 are not part of array
        .map(igKey => { //we transforming string value into an array with as many elements as we have ingredients for a given ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => { //length of Array(length here) is amount of a given ingredient
               return <BurgerIngredient key={igKey + i} type={igKey}/>;
            })
        });
    return (
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
