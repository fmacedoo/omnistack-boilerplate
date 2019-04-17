import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';

import { authenticate } from '../../stores/authentication/authenticationActions'
import { navigateTo } from '../../stores/navigation/navigationActions';

const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10,
    },
    logo: {
        marginBottom: 40
    },
    input: {
        padding: 6,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
        width: '100%',
    },
});

class LoginScreen extends Component {

    static navigationOptions = {
        headerStyle: { display: 'none' }
    };

    state = this.props.authenticationForm;

    textInput_OnChangeText = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    buttonLogin_OnPress = () => {
        this.props.authenticate(this.state);
    }

    buttonEsqueci_OnPress = () => {
        this.props.navigate('ForgotPassword');
    }

    render() {
        const { email, password } = this.state;

        return (
            <KeyboardAvoidingView style={ styles.parent } behavior="padding" enabled>
                <TouchableWithoutFeedback style={ styles.parent } onPress={ Keyboard.dismiss } accessible={false}>
                    <View style={ styles.container }>
                        <TextInput style={ styles.input } 
                            value={ email }
                            autoCapitalize="none"
                            keyboardType="email-address" 
                            placeholder="Email" 
                            name="email" 
                            onChangeText={ value => this.textInput_OnChangeText('email', value) } />
                        <TextInput style={ styles.input } 
                            value={ password }
                            autoCapitalize="none"
                            textContentType="password"
                            placeholder="Senha" 
                            name="password" 
                            onChangeText={ value => this.textInput_OnChangeText('password', value) } />
                        <Button
                            title="Login"
                            accessibilityLabel="Tap to log into"
                            onPress={ this.buttonLogin_OnPress }
                        />
                        <Button
                            title="Forgot My Password"
                            accessibilityLabel="Tap to recover your password"
                            onPress={ this.buttonEsqueci_OnPress }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticationForm: state.authentication.authenticationForm,
        authenticationInfo: state.authentication.authenticationInfo,
        errors: state.authentication.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (payload) => dispatch(authenticate(payload)),
        navigate: (routeName) => dispatch(navigateTo(routeName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);