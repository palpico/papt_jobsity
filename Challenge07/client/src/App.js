import React, {Component} from 'react';
import {Header,NavigationMenu,Bookshelf,MostRead} from './components/';
import {Grid} from '@material-ui/core';


import './App.css';

class App extends Component {
    render() {
        return (
            <Grid container spacing={0}>
                        <Header/>
                <Grid item xs={2}>
                        <NavigationMenu/>
                </Grid>
                <Grid item xs={8}>
                    <Bookshelf/>
                </Grid>
                <Grid item xs={2}>
                        <MostRead/>
                </Grid>
            </Grid>
        );
    }
}

export default App;
