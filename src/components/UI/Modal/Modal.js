import React from 'react';

import '../../../index.css';

import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary'

const modal = (props) => {
    return (
        <div className="Modal">
            {props.children}
        </div>
    );
};

export default modal;
