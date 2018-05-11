import React from 'react';

import '../../../index.css';
import Aux from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} randomNameClicked={props.modalClosedPlz}/>
            <div className="Modal"
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-50vh)',
                     opacity: props.show ? '1' : '0'
                 }}>
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;
