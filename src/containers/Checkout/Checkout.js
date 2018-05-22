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

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/BURGER-OM-NOM-NOM');
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
