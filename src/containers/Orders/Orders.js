import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }


    componentDidMount() {
        axios.get('/orders.json').then(responseFromDB => {

            /*converts our strange database with strange names to data that we need*/
            const fetchOrders = [];
            for (let key in responseFromDB.data){
                fetchOrders.push({
                    ...responseFromDB[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchOrders});
            console.log(this.state.orders);
        }).catch(error => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
