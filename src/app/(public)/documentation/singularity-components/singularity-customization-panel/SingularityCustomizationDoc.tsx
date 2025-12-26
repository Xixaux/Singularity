'use client';

import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'src/store/hooks';
import { closeDialog, openDialog } from '@singularity/core/SingularityDialog/singularityDialogSlice';

/**
 * SingularityCustomizationDoc
 * This document provides information on how to use the SingularityDialog.
 */
function SingularityCustomizationDoc() {
    const dispatch = useAppDispatch();

    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                SingularityDialog
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                <code>SingularityDialog</code> is a straightforward dialog trigger designed to display dialog messages effortlessly using a Redux action.
                It should be integrated within the theme layouts.
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Usage
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                You can display a dialog from any part of the application by dispatching the openDialog action. It leverages Material-UI's dialog component, allowing you to pass props within an object:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
                        <Button
                            onClick={() => dispatch(openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => dispatch(closeDialog())} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={() => dispatch(closeDialog())} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                     ))
                            })}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                        `}
            </SingularityHighlight>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Example
            </Typography>

            <Button
                onClick={() =>
                    dispatch(
                        openDialog({
                            children: (
                                <>
                                    <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Let Google help apps determine location. This means sending anonymous
                                            location data to Google, even when no apps are running.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick={() => dispatch(closeDialog())}
                                            color="primary"
                                        >
                                            Disagree
                                        </Button>
                                        <Button
                                            onClick={() => dispatch(closeDialog())}
                                            color="primary"
                                            autoFocus
                                        >
                                            Agree
                                        </Button>
                                    </DialogActions>
                                </>
                            )
                        })
                    )
                }
                variant="contained"
                color="secondary"
            >
                Open Dialog
            </Button>
        </>
    );
}

export default SingularityCustomizationDoc;