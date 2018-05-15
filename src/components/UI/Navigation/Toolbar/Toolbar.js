import React from 'react';

import '../../../../index.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../../../NavigationItimes/NavigationItems'
import Menu from '../Menu/Menu'

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Menu showMenu={props.sideBarShow}/>
            <Logo cn="Logo2"/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;
