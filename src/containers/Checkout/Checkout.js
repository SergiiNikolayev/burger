import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search); //search URL, include question mark and so on
        const ingredients = {};
        for (let param of query.entries()){
            // ['salad' , '1']
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients});

    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/BURGER-OM-NOM-NOM');
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCanceled = {this.checkoutCancelHandler}
                    checkoutContinued = {this.checkoutContinueHandler}
                    ingredients={this.state.ingredients} />
            </div>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;
