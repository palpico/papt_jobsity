import React from 'react';
import {Typography} from '@material-ui/core/';
import BookModal from './BookModal';

class Book extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <img src={this.props.bookInfo.thumbnail}
                     style={{width: "84%", height: "240px", display: "block", margin: "auto"}}
                     alt=""
                onClick={this.handleOpen}
                />
                <Typography gutterBottom variant="body2" style={{color: "#6EC1E4"}} noWrap>
                    {this.props.bookInfo.title}
                </Typography>
                <Typography gutterBottom variant="caption" noWrap>
                    {(this.props.bookInfo.authors).map(author =>
                        <span
                            key={"bauth" + (this.props.bookInfo.authors).slice(0, 4) + Math.floor(Math.random() * 10)}>
                            {author}
                            </span>
                    )}
                </Typography>
                <BookModal bookInfo={this.props.bookInfo} handleClose={this.handleClose} handleOpen={this.handleOpen} open={this.state.open}/>
            </div>
        );
    };
}

export default Book;