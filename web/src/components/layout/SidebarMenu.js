import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Material.ui
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';

// Actions
import * as sidebarActions from '../../stores/sidebar/sidebarActions';
import { navigateTo } from '../../stores/navigation/navigationActions';
import { logoff } from '../../stores/authentication/authenticationActions';

const styles = {
    menu: {
        width: 240,
    },
    menuHeader: {
        display: 'flex',
    },
    menuHeaderItems: {
        display: 'flex',
        flexGrow: 1,
        minHeight: 56,
        alignItems: 'flex-start',
        paddingLeft: 24,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    menuTitle: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: 4,
        textDecoration: 'none'
    },
    menuVersion: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
};

const SidebarMenu = (props) => {

  const { classes, open, toggleSidebar, logoff, navigateToHome } = props;
  
  return (
    <Drawer open={open} onClose={ () => toggleSidebar(false) }>
      <div
        tabIndex={0}
        role="button"
        onClick={ () => toggleSidebar(false) }
        onKeyDown={ () => toggleSidebar(false) }
      >
        <div className={classes.menu}>
          <div className={classes.menuHeader}>
              <div className={classes.menuHeaderItems}>
                  <Typography variant="h6">Omnistack Boilerplate</Typography>
                  <Typography style={ styles.menuVersion } variant="caption">v1.0.0</Typography>
              </div>
          </div>
          <Divider />
          <List dense={false}>
              <ListItem button onClick={navigateToHome}>
                  <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={logoff}>
                  <ListItemText primary="Sair" />
              </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  )
}

const mapStateToProps = (state) => ({
  open: state.sidebar.open
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
      { ...sidebarActions, logoff },
      dispatch
  ),
  navigateToHome: () => dispatch(navigateTo('/'))
});

const ReduxSidebarMenu = connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);

ReduxSidebarMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReduxSidebarMenu);