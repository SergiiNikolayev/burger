import React, {Component} from 'react';

import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat: 2,
    bacon: 1.5
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false, //if we have at least 1 ingredient it set to true
        purchasing: false
    };

    updatePurchaseState (ingredients) {
        //here we converting Object sum to Array of keys, like [salad, cheese, ...] then use this key for accesing ingredients Array and set right values to our new Array after we use .reduce
        const sum  = Object.keys(ingredients)
            .map( someKey => {
                return ingredients[someKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState( {purchasable: sum > 0 } ); // sum > 0  is true or false
        console.log("BurgerBuilder sum: " + sum);
    }

    addIngredientHandler = ( type ) => {
        //to add ingredient first of all we need to know what old ingr-t is
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            //if there is nothing
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    closeModalHandler = () => {
        this.setState({purchasing: false})
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 //this line convert numbers to booleans,  disabledInfo[key] <= 0  will check if value of salad and others is 0 or less then 0 and return true or false
            /** in this restructured object (disabledInfo) we will got:
             *      {salad: true, meat: false, ...}
             * */
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosedPlz={this.closeModalHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;