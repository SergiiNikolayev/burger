import React from 'react';

import NavigationItem from './NavigationItem'
import '../../index.css'

const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/" >Checkout page</NavigationItem>
        </ul>
    );
};

export default navigationItems;
