import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search); //search URL, include question mark and so on
        const ingredients = {};
        let price = null;
        for (let param of query.entries()){
            // ['salad' , '1']
            if (param[0] === 'price'){
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            price: price,
        });

    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCanceled = {this.checkoutCancelHandler}
                    checkoutContinued = {this.checkoutContinueHandler}
                    ingredients={this.state.ingredients} />


                {/** in this Route we can pass data to our <ContactData/> component via render and props ingredients*/}
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        render={( props ) => (<ContactData ingrsFromCheckout={this.state.ingredients} price={this.state.price} {...props} /> )} />

            </div>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;
