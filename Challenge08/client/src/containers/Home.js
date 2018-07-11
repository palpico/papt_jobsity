import React, {Component} from 'react';
import {Header, NavigationMenu, Bookshelf, MostRead} from '../components/home/index';
import {Grid} from '@material-ui/core';
import {getBook} from '../config';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myBooks: [],
        };
        this.saveBookshelf = this.saveBookshelf.bind(this);
    };

    componentWillMount() {
        getBook(this.saveBookshelf)

    }

    saveBookshelf(data) {
        this.setState({
            myBooks: data,
        });
    };

    render() {
        return (
            <Grid container spacing={0}>
                <Header/>
                <Grid item className={"laterals"} style={{width: "15%"}}>
                    <NavigationMenu/>
                </Grid>
                <Grid item style={{width: "70%"}}>
                    <Bookshelf myBooks={this.state.myBooks}/>
                </Grid>
                <Grid item style={{width: "15%"}}>
                    <MostRead/>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
