import React, {Fragment} from 'react';
import {Card, CardContent, CardMedia, CardActions, Typography} from '@material-ui/core/';
import BookModal from './BookModal';

export class Book extends React.Component {
    render() {
        return (
            <Fragment>
                <Card>
                    <CardMedia title={this.props.bookInfo.title}>
                        <img src={this.props.bookInfo.thumbnail}
                             style={{width: "84%", height: "240px", display: "block", margin: "auto"}} alt=""/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="caption" component="h2" noWrap>
                            {this.props.bookInfo.title}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="h2" noWrap>
                            {this.props.bookInfo.authors}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <BookModal bookInfo={this.props.bookInfo}/>
                    </CardActions>
                </Card>
            </Fragment>
        )
    }
}

export default Book;