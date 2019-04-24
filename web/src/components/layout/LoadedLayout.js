import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from "react-router-dom";

// Custom Routers
import { RouteView } from '../customRouters/RouteView';

// Views
import Login from '../../containers/Login';
import Home from '../../containers/Home';

// Actions
import { checkAuthentication } from '../../stores/authentication/authenticationActions';

class LoadedApp extends Component {

    componentDidUpdate() {
        const { isStarted } = this.props;
        if (isStarted) {
            this.props.checkAuthentication();
        }
    }
  
    render() {
        const { isStarted } = this.props;
        return (
            (isStarted) && (
                <Switch>
                    <RouteView path="/" exact component={Home} />
                    <RouteView path="/login" fullscreen component={Login} />
                </Switch>
            )
        )
    }
}

const mapStateToProps = state => ({
    isStarted: state.root.isStarted,
});

const mapDispatchToProps = dispatch => ({
    checkAuthentication: () => dispatch(checkAuthentication()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadedApp);