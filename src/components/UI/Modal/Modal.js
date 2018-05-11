import React from 'react';

import '../../../index.css';

import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary'

const modal = (props) => {
    return (
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-50vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    );
};

export default modal;
