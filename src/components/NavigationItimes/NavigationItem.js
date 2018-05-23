import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../index.css'

const navigationItem = (props) => {
    return (
        <li className="NavigationItem">
            {/* props exact give us class active */}
            <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
        </li>
    );
};

export default navigationItem;
