import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import Ty from './containers/Checkout/Ty/Ty'

class App extends Component {
/*    state = {
        show: true
    };

    componentDidMount(){
        setTimeout( () => {
            this.setState({show: false});
        }, 5000);
    }*/

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={BurgerBuilder}/>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/ty" component={Ty} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
