import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

class MessagesScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Messages',
        headerRight: (
            <Button
              onPress={navigation.getParam('logoff')}
              title="Sair"
            />
        ),
        headerBackTitle: null
    });

    componentDidMount() {
        this.props.navigation.setParams({ logoff: this._logoff });
        //this.props.getOuvidores();
    }

    _logoff = () => {
        this.props.logoff();
    }

    render() {
        return (
            <View>
                <Text>LISTA DE MENSAGENS</Text>
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
        //navigate: (routeName, param) => dispatch(navigateTo(routeName, param)),
        //getOuvidores: () => dispatch(getOuvidores()),
        logoff: () => dispatch(logoff()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);