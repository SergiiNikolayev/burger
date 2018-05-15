import React from 'react';

import '../../../../index.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../../../NavigationItimes/NavigationItems'
import Backdrop from '../../Backdrop/Backdrop'
import Aux from '../../../../hoc/Auxx'

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open){
        attachedClasses = ["SideDrawer", "Open"];
    } else if (!props.open) {
        attachedClasses = ["SideDrawer", "Close"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} randomNameClicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo cn="Logo"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
