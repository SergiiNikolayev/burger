import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner'

import '../../../index.css';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();

        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let street = document.getElementById('street');
        let postal = document.getElementById('postal');
        let when = new Date().toISOString().slice(0, 10);

        this.setState({loading: true});
        const order = {
            ordered: when,
            customer: {
                name: name.value,
                email: email.value,
                address: {
                    street: street.value,
                    zipCode: postal.value,
                },
            },
            ingredients: this.props.ingrsFromCheckout,
            price: this.props.price,
        }

        console.log(order);

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/Ty'); // after sending form to server we redirected to home page but we don't have history method here so we need to pass it in props in checkout->Route->render{(props) => {...props} or wrap ContactData when we make export with RouterHelper method
            }).catch(error => {
            this.setState({loading: false})
        });

    }

    render() {
        let form = (
            <form>
                <input id="name" className="Input" type="text" name="name" placeholder="Your Name"/>
                <input id="email" className="Input" type="email" name="email" placeholder="Your e-mail"/>
                <input id="street" className="Input" type="text" name="street" placeholder="Street"/>
                <input id="postal" className="Input" type="text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading){
            form = <Spinner/>;
        }

        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

ContactData.propTypes = {};

export default ContactData;
