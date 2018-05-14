import React from 'react';

//import '../../../../index.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../../../NavigationItimes/NavigationItems'

const sideDrawer = () => {
    //...
    return (
        <div className="SideDrawer">
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;
