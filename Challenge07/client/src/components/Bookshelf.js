import React, {Fragment} from 'react';
import {Typography, IconButton, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ViewList, ViewModule} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {OrderOptionsT} from '../TextStore';
import Books from './Book';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class Bookshelf extends React.Component {
    render() {
        return (
            <Fragment>
                <Grid container spacing={0}>
                    <Grid item xs={1}/>
                    <Grid item xs={2}>
                        <BookshelfTitle/>
                    </Grid>
                    <Grid item xs={5}>
                        <OrderOptions/>
                    </Grid>
                    <Grid item xs={2}>
                        <DisplayOptions/>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Books/>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

class BookshelfTitle extends React.Component {
    render() {
        return (
            <Typography variant="subheading" color="inherit">
                New Releases
            </Typography>
        );
    }
}

class OrderOptions extends React.Component {
    render() {
        return (
            <Fragment>
                <Button>{OrderOptionsT[0]}</Button> | <Button>{OrderOptionsT[1]}</Button>
            </Fragment>
        );
    }
}


class DisplayOptions extends React.Component {
    render() {
        return (
            <Fragment>
                <IconButton aria-label="ViewModule" style={{color: '#7FCCEA'}}>
                    <ViewModule/>
                </IconButton>
                <IconButton aria-label="ViewList" style={{color: '#7FCCEA'}}>
                    <ViewList/>
                </IconButton>
            </Fragment>
        );
    }
}

Bookshelf.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookshelf);