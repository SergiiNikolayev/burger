import React from 'react';
import Auxx from '../../hoc/Auxx';
import '../../index.css'

const layout = (props) => (
    <Auxx>
        <div>ToolBar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Auxx>
);

export default layout;