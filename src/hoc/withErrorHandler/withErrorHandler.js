import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxx';
import Button from '../../components/UI/Button/Button';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            //axios also can handleErrors
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use( res => res /*response return response*/, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosedPlz={this.errorConfirmedHandler}>
                        <span>
                            {this.state.error ? this.state.error.message : null }
                        </span>
                        <Button
                            btnType="Danger"
                            clicked={this.errorConfirmedHandler} > | OK </Button>
                    </Modal>
                    <WrappedComponent { ...this.props } />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
