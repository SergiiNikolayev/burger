import React from 'react';

import '../../index.css'

const navigationItem = (props) => {
    return (
        <li className="NavigationItem">
            <a href={props.link}
               className={props.active ? "active" : null}>{props.children}</a>
        </li>
    );
};

export default navigationItem;
