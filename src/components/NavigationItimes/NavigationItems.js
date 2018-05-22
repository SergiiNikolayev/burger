import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import NavigationItem from './NavigationItem'
import '../../index.css'

const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <Link to="/checkout" >Checkout page</Link>
            <NavigationItem link="/" >Checkout page</NavigationItem>
        </ul>
    );
};

export default navigationItems;
