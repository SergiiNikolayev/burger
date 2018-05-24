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
            console.log(responseFromDB.data);
            /*converts our strange database with strange names to data that we need*/
            const fetchOrders = [];
            for (let key in responseFromDB.data){
                fetchOrders.push({
                    ...responseFromDB.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchOrders});
        }).catch(error => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div>
                {this.state.orders.map( order => (
                    <Order
                        key={order.id}
                        buyer={order.customer.name}
                        ingredients={order.ingredients}
                        price={+order.price} /* we added + to convert to Number or we can also add in Order.js Number.parseFloat(props.price).toFixed(2) to convert it in number*/
                        ordered = {order.ordered}
                        time = {order.orderedTime}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
