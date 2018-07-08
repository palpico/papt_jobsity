import React, {Fragment} from 'react';
import {Typography, IconButton, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ViewList, ViewModule} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {OrderOptionsT} from '../../TextStore';
import Books from './Book';

const bookAPI = 'http://localhost:9000/book';
const booksDisplayed = 15;

let myBooks = getBookInfo(bookAPI);

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

function getBookInfo(url) {
    let Httpreq = new XMLHttpRequest(); // new request
    Httpreq.overrideMimeType("application/json");
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    let books = JSON.parse(Httpreq.responseText).books;
    return books;
}

class Bookshelf extends React.Component {
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
                        {(myBooks.slice(0, booksDisplayed)).map(book =>
                            <Grid item key={"Grid" + book._id} style={{width: "20%"}}>
                                <Books bookInfo={book} key={"book" + book._id}/>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item style={{width: "5%"}}>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

class BookshelfTitle extends React.Component {
    render() {
        return (
            <Typography variant="subheading" color="inherit" style={{height: "75px", verticalAlign: "middle"}}>
                New Releases
            </Typography>
        );
    }
}

class OrderOptions extends React.Component {
    render() {
        return (
            <Fragment>
                <Button style={{height: "75px"}}>{OrderOptionsT[0]}</Button>
                |
                <Button style={{height: "75px" }}>{OrderOptionsT[1]}</Button>
            </Fragment>
        );
    }
}


class DisplayOptions extends React.Component {
    render() {
        return (
            <Fragment>
                <IconButton aria-label="ViewModule" style={{color: '#7FCCEA', float:"right"}}>
                    <ViewModule/>
                </IconButton>
                <IconButton aria-label="ViewList" style={{color: '#7FCCEA', float:"right" }}>
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