import React from 'react';

import Aux from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    /*const showPrice = Object.keys(props.totalPrice)
        .map(priceKeys => {
            {console.log()}
            return (
                <p> {props.totalPrice[priceKeys]} </p>
            )
        });*/

    const ingredientSummary = Object.keys(props.ingredients)
        .map(keyz => {
            //just keyz in key will work fine
            return (<li key={keyz + Math.random()} >
                <span
                    style={{ textTransform: 'capitalize'}}
                    >{keyz}</span>:
                {props.ingredients[keyz]}
                </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.onCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;
