import React, {Component} from 'react';
import {Header,NavigationMenu,Bookshelf,MostRead} from './components/';
import {Grid} from '@material-ui/core';


import './App.css';

class Home extends Component {
    render() {
        return (
            <Grid container spacing={0}>
                        <Header/>
                <Grid item style={{width: "15%"}}>
                        <NavigationMenu/>
                </Grid>
                <Grid item style={{width: "70%"}}>
                    <Bookshelf/>
                </Grid>
                <Grid item style={{width: "15%"}}>
                        <MostRead/>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
