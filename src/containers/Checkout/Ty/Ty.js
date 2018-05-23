import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'

import '../../../index.css'


class Thanks extends Component {

    /** this is redirect */
    componentWillMount() {
        setTimeout(() => {
            console.log('this ran');
            this.props.history.push('/orders');
        }, 2000)
    }

    render() {
        return (
            <div className="Ty">
                <h2>Thanks for your purchase!</h2>
                <h3>Enjoy!</h3>

                {/** or here immediately redirect

                 <Route exact path="/Ty" render={() => (
                    <Redirect to="/"/>
                )}/>

                 */}
            </div>
        );
    }
}

export default Thanks;
