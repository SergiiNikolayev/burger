import React from 'react';

const menu = (props) => {
    return (
        <div onClick={props.showMenu}>
            <p>MenU</p>
        </div>
    );
};

export default menu;
