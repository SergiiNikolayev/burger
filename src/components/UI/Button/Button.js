import React from 'react';

import '../../../index.css';

const button = (props) => {
        return (
            <button
                onClick={props.clicked}
                className={ "Button " + props.btnType} //btnType is for .Danger and .Success 123 video 4min
            >{props.children}</button>
        )
};

export default button;
