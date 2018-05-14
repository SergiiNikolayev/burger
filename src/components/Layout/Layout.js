import React, { Component } from 'react';

import Aux from '../../hoc/Auxx';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import '../../index.css';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    //state contain info if SideDrawer visible or not
    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render(){
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;