import React, {Fragment} from 'react';
import {Grid, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Search} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {searchT} from '../../config';

const styles = {};

class SearchField extends React.Component {
    render() {
        return (
            <Fragment>
                <Grid container alignItems="flex-end">
                    <Grid item>
                        <Search/>
                    </Grid>
                    <Grid item>
                        <TextField label={searchT}/>
                    </Grid>
                </Grid>
            </Fragment>
        );
    };
}

SearchField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);