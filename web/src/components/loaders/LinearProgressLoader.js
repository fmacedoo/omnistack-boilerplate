import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material.ui
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const styles = {
    progress: {
        zIndex: 2100, // To overlap the others
        position: 'fixed',
        top: 0,
        left: 'auto',
        right: 0,
        width: '100%',
    }
};

const LinearProgressLoader = (props) => {
    const { showLoader, classes } = props;

    return (
        (showLoader) && (<LinearProgress className={classes.progress} color="secondary" variant="indeterminate" />)
    )
}

const mapStateToProps = state => ({
    showLoader: state.loader.show,
});

LinearProgressLoader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(LinearProgressLoader));