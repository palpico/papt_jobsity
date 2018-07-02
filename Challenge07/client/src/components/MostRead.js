import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {List, ListSubheader, ListItem, ListItemText} from '@material-ui/core';
import {MostReadMenuT,MostReadMenuI} from '../TextStore';


class MostRead extends React.Component {
    render() {
        return (
            <Fragment>
                <List style={{backgroundColor: '#231F20', height:'100%' }}>
                    <ListSubheader style={{color: '#FFFFFF'}}>
                        {MostReadMenuT}
                    </ListSubheader>
                    {MostReadMenuI.map(item =>
                        <ListItem button>
                            <ListItemText
                                disableTypography='true'
                                style={{color: '#FFFFFF', fontSize: '12px'}} primary={item}/>
                        </ListItem>
                    )}
                </List>
            </Fragment>

        )
    }
}

MostRead.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (MostRead);