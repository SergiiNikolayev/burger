import React from 'react';

import NavigationItem from './NavigationItem'
import '../../index.css'

const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            {/* props exact give us class active */}
            <NavigationItem link="/" exact >Burger Builder</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
        </ul>
    );
};

export default navigationItems;
