import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material.ui
import { Dialog, DialogActions, Button, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

// Actions
import { closeAlert } from '../../stores/alert/alertActions';

const Alert = (props) => {
    const { alert, closeAlert } = props;
    const open = !!alert;

    return (
        <Dialog
            open={open}
            onClose={closeAlert}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{(alert && alert.title) || 'Alert!'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {
                        alert && alert.messages && alert.messages.map && alert.messages.map(o => (
                            <p>{ o }</p>
                        ))
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeAlert} color="primary" autoFocus>
                    Ok!
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    alert: state.dialogs.alert
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        { closeAlert },
        dispatch
    )
)

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
