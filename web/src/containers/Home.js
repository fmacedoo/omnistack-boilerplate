import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {

    componentDidMount() {
        
    }

    render() {
        const { demandas, navigateToDemanda } = this.props;
        
        return (
            <div>Messages must be here</div>
        )
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({  }, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(Home);