import React from 'react';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
import {appNameT} from '../../config';
import SearchField from './Search';
import {LogoWide} from '../common';
import {Profile} from '../user';

class Header extends React.Component {

    render() {
        return (
            <Grid item xs={12} style={{height: "80px"}}>
                <AppBar position="static" style={{paddingLeft: 0, paddingRight: 0, backgroundColor:'#FFFFFF',height: "80px" }}>
                    <Toolbar style={{paddingLeft: 0, paddingRight: 0}}>
                        <Grid item style={{width: "15%"}}>
                            <LogoWide/>
                        </Grid>
                        <Grid item style={{width: "50%"}}>
                            <Typography variant="title" style={{color:'#000000'}}>
                                {appNameT}
                            </Typography>
                        </Grid>
                        <Grid item style={{width: "20%"}}>
                            <SearchField/>
                        </Grid>
                        <Grid item style={{width: "15%"}}>
                            <Profile/>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        );
    };
}

export default Header;