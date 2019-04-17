import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class ForgotPasswordScreen extends Component {
    render() {
        return (
            <View>
                <Text>FORGOT PASSWORD</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);