import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Material.io
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Layouts
import SidebarMenu from './SidebarMenu';

// Actions
import * as sidebarActions from '../../stores/sidebar/sidebarActions';
import { bindActionCreators } from 'redux';

const styles = {
    fullscreenRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    content: {
        paddingTop: 56,
        minHeight: '100vh',
    },
};

const View = (props) => {
    const { classes, toggleSidebar, fullscreen } = props;

    return (
        <div className={fullscreen ? classes.fullscreenRoot : classes.root}>
            
            { 
                (!fullscreen) && (
                <Fragment>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={ () => toggleSidebar(true) }>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Omnistack Boilerplate
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <SidebarMenu />
                </Fragment>
                )
            }
            <div className={!fullscreen ? classes.content : undefined}>
                { props.children }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
});
  
const mapDispatchToProps = dispatch => (
    bindActionCreators(
        { ...sidebarActions },
        dispatch
    )
);

const ReduxView = connect(mapStateToProps, mapDispatchToProps)(View);

ReduxView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReduxView);