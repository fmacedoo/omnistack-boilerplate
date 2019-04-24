import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material.io
import { withStyles } from '@material-ui/core/styles';
import { Input, Button, Typography } from '@material-ui/core';
import { authenticate } from '../stores/authentication/authenticationActions';

const styles = {
    card: {
      minWidth: 300,
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 120,
        height: 'auto',
        marginBottom: 10,
    },
    text: {
        color: '#0000008e',  
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginBottom: 10,
    },
};

class Login extends Component {

    state = {
        email: this.props.form.email,
        password: this.props.form.password,
    }

    authenticate = () => {
        const payload = { email: this.state.email, password: this.state.password };
        this.props.authenticate(payload);
    }

    input_onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { classes } = this.props;
        const { email, password } = this.props;

        return (
            <div className={classes.card}>
                <div className={classes.header}>
                    <img className={classes.logo} src="/assets/logo-acme.svg" alt="logo" />
                    <Typography className={classes.text}>Omnistack Boilerplate</Typography>
                </div>
                <Input
                    value={email}
                    className={classes.input}
                    placeholder="Email"
                    id="email"
                    onChange={this.input_onChange}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Input
                    value={password}
                    className={classes.input}
                    placeholder="Senha"
                    id="password"
                    onChange={this.input_onChange}
                    type="password"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Button variant="outlined" className={classes.button} onClick={this.authenticate}>
                    Login
                </Button>
                <Button variant="outlined" className={classes.button}>
                    Forgot my password
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.authentication.authenticationForm
});

const mapDispatchToProps = dispatch => ({
    authenticate: (payload) => dispatch(authenticate(payload)),
});

const ReduxLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

ReduxLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReduxLogin);