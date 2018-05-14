import React from 'react';

import '../../../../index.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../../../NavigationItimes/NavigationItems'

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo cn="Logo2"/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;
