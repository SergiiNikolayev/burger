import React from 'react';

import Aux from '../../hoc/Auxx';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import '../../index.css';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'


const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;