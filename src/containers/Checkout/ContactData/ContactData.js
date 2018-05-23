import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'

import '../../../index.css';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className="ContactData" >
                <h4>Enter your Contact Data</h4>
                <form >
                    <input className="Input" type="text" name="name" placeholder="Your Name" />
                    <input className="Input" type="email" name="email" placeholder="Your e-mail" />
                    <input className="Input" type="text" name="street" placeholder="Street" />
                    <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" >ORDER</Button>
                </form>

            </div>
        );
    }
}

ContactData.propTypes = {};

export default ContactData;
