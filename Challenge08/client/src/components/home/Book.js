import React from 'react';
import {Typography} from '@material-ui/core/';
import BookModal from './BookModal';

export class Book extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.bookInfo.thumbnail}
                     style={{width: "84%", height: "240px", display: "block", margin: "auto"}}
                     alt=""/>
                <Typography gutterBottom variant="body2" style={{color: "#6EC1E4"}} noWrap>
                    {this.props.bookInfo.title}
                </Typography>
                <Typography gutterBottom variant="caption" noWrap>
                    {(this.props.bookInfo.authors).map(author =>
                        <span key={"bauthor" + (this.props.bookInfo.authors).slice(0,4)}>{author}</span>
                    )}
                </Typography>
                <BookModal bookInfo={this.props.bookInfo}/>
            </div>
        );
    };
}

export default Book;