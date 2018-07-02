import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core/';
import BookModal from './BookModal';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

export class Book extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardMedia
                        image=""
                        title={this.props.title}
                    />
                    <CardContent onClick={<BookModal/>}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <BookModal bookInfo={this.props}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}


Book.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Book);