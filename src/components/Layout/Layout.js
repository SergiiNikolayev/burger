import React, { Component } from 'react';

import Aux from '../../hoc/Auxx';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import '../../index.css';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    //state contain info if SideDrawer visible or not
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        //this.setState({showSideDrawer: !this.state.showSideDrawer});  -- this not safe way
        //but this way i safe, when we use prevState :
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render(){
        return (
            <Aux>
                <Toolbar sideBarShow={this.sideDrawerToggleHandler}/>
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