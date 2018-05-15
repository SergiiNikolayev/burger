import React from 'react';

import '../../../../index.css'

const menu = (props) => {
    return (
        <div className="DrawerToggle" onClick={props.showMenu} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default menu;
