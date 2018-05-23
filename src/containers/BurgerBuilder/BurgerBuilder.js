import React, {Component} from 'react';

import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat: 2,
    bacon: 1.5
};

const START_PRICE = 4;

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: START_PRICE,
        purchasable: false, //if we have at least 1 ingredient it set to true
        purchasing: false,
        loading: false,
        state: false
    };

    componentDidMount() {
        axios.get('https://react-app-burger-1ee32.firebaseio.com/ingredients.json').then(response => {
            this.setState({ingredients: response.data});
        }).catch(error => {
            this.setState({error: true})
        });
    }

    updatePurchaseState(ingredients) {
        //here we converting Object sum to Array of keys, like [salad, cheese, ...] then use this key for accesing ingredients Array and set right values to our new Array after we use .reduce
        const sum = Object.keys(ingredients)
            .map(someKey => {
                return ingredients[someKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0}); // sum > 0  is true or false
        console.log("BurgerBuilder sum: " + sum);
    }

    addIngredientHandler = (type) => {
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

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
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
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    closeModalHandler = () => {
        this.setState({purchasing: false})
        //also work as cancel purchase
    }

    purchaseContinueHandler = () => {
        /**
         For production ready app, we need to calculate our total price on the server to prevent user from manipulating code before sending to sever
         */
        /*
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Customer Name',
                address: {
                    street: 'Random str., 108',
                    zipCOde: '90210',
                    country: 'Ukraine'
                },
                email: 'tratata@random.site'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false})
            }).catch(error => {
            this.setState({loading: false, purchasing: false})
        });*/

        /** here we passing our ingredients to checkout.js but first we need to encode them to uri and then in checkout.js encode them back*/
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString /* string of ingredients*/
        });
    }


    resetHandler = () => {

        /**
         In resetHandler first we are making copy of our state ingredients
         then we initiating 0's to each key (key: 0, key: 0)
         and then we put our copy of ingredients to the state with setState
         */

        const oldIngredients = {...this.state.ingredients};
        for (let key in oldIngredients) {
            oldIngredients[key] = 0;
        };

        this.setState({
            ingredients: oldIngredients,
            totalPrice: START_PRICE,
            purchasable: false
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 //this line convert numbers to booleans,  disabledInfo[key] <= 0  will check if value of salad and others is 0 or less then 0 and return true or false
            /** in this restructured object (disabledInfo) we will got:
             *      {salad: true, meat: false, ...}
             * */
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Can't load ingredients</p> : <Spinner/>;
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                        resetAll={this.resetHandler}
                    />
                </Aux>
            );

            orderSummary = (
                <Aux>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        onCancel={this.closeModalHandler}
                        onContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}/>
                </Aux>
            );

        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosedPlz={this.closeModalHandler} cF={this.closeModalHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);