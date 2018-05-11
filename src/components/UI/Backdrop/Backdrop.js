import React from 'react';

import '../../../index.css';

const backdrop = (props) => {
    return (
        props.show ? <div className="Backdrop" onClick={props.randomNameClicked}></div> : null
    );
};

export default backdrop;
