import React, {Fragment} from 'react';
import {Typography, IconButton, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ViewList, ViewModule} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {orderOptionsT} from '../../config/';
import Books from './Book';

const booksDisplayed = 15;

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <Fragment>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <BookshelfTitle/>
                    </Grid>
                    <Grid item xs={6}>
                        <OrderOptions/>
                    </Grid>
                    <Grid item xs={3} style={{display: "inline-block"}}>
                        <DisplayOptions/>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item style={{width: "5%"}}>
                    </Grid>
                    <Grid container spacing={0}>
                        {this.props.myBooks!==[] ? (this.props.myBooks.slice(0, booksDisplayed)).map(book =>
                            <Grid item key={"Grid" + book._id} style={{width: "20%"}}>
                                <Books bookInfo={book}/>
                            </Grid>
                        ) : <Typography>No books found</Typography>}
                    </Grid>
                    <Grid item style={{width: "5%"}}>
                    </Grid>
                </Grid>
            </Fragment>
        );
    };
}

class BookshelfTitle extends React.Component {
    render() {
        return (
            <Typography variant="subheading" color="inherit" style={{height: "75px", verticalAlign: "middle"}}>
                New Releases
            </Typography>
        );
    };
}

class OrderOptions extends React.Component {
    render() {
        return (
            <Fragment>
                <Button style={{height: "75px"}}>{orderOptionsT[0]}</Button>
                |
                <Button style={{height: "75px"}}>{orderOptionsT[1]}</Button>
            </Fragment>
        );
    };
}


class DisplayOptions extends React.Component {
    render() {
        return (
            <Fragment>
                <IconButton aria-label="ViewModule" style={{color: '#7FCCEA', float: "right"}}>
                    <ViewModule/>
                </IconButton>
                <IconButton aria-label="ViewList" style={{color: '#7FCCEA', float: "right"}}>
                    <ViewList/>
                </IconButton>
            </Fragment>
        );
    };
}

Bookshelf.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookshelf);