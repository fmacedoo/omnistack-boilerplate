import React from 'react';
import { connect } from 'react-redux';

const LoadedApp = (props) => {
    const { isStarted } = props;
    return (
        (!isStarted) && (<h1>Still loading...</h1>)
    )
}

const mapStateToProps = state => ({
    isStarted: state.root.isStarted,
});

export default connect(mapStateToProps)(LoadedApp);