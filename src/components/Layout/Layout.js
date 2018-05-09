import React from 'react';
import Aux from '../../hoc/Auxx';
import '../../index.css'

const layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;