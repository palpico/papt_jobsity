import React, {Fragment} from 'react';
import {List, ListSubheader, ListItem, ListItemText, Typography} from '@material-ui/core';
import {mostReadMenuT, mostReadMenuI} from '../../config/TextStore';


class MostRead extends React.Component {
    render() {
        return (
            <Fragment>
                <List style={{backgroundColor: '#231F20', height: '100%'}}>
                    <ListSubheader style={{color: '#FFFFFF'}}>
                        {mostReadMenuT}
                    </ListSubheader>
                    {mostReadMenuI.map(item =>
                        <ListItem button key={item[1]}>
                            <ListItemText>
                                <Typography noWrap style={{color: '#A8A8A8', fontSize: '12px'}}>
                                    {item[0]}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    )}
                </List>
            </Fragment>

        );
    };
}

export default (MostRead);