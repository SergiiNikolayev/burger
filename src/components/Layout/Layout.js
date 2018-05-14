import React from 'react';

import Aux from '../../hoc/Auxx';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import '../../index.css'



const layout = (props) => (
    <Aux>
        <Toolbar>

        </Toolbar>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;