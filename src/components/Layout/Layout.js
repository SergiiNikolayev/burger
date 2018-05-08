import React from 'react';
import Auxx from '../../hoc/Auxx';

const layout = (props) => (
    <Auxx>
        <div>ToolBar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxx>
);

export default layout;