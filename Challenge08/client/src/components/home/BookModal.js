import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Modal, Button, Grid} from '@material-ui/core';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'relative',
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(33,33,33,0.95)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class BookModal extends React.Component {
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
        const {classes} = this.props;

        return (
        <Fragment>
            <Button onClick={this.handleOpen}>More Info / Reserve</Button>
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Grid container style={getModalStyle()} className={classes.paper}>
                        <Grid item xs={4}>
                            <img src={this.props.bookInfo.thumbnail}
                                 style={{width: "80%", display: "block", margin: "auto"}}
                                 alt=""/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="title" id="modal-title" style={{color: "#6EC1E4"}}>
                                {this.props.bookInfo.title}
                                <span style={{color: "#A8A8A8", float: "right"}}>
                                        {this.props.bookInfo.publishedDate}
                                    </span>
                            </Typography>
                            <Typography style={{color: "#ffffff"}}>
                                {"by "}
                                {(this.props.bookInfo.authors).map(author =>
                                    <span key={"mauthor" + (this.props.bookInfo.authors).slice(0,4)}>{author}</span>
                                )}
                            </Typography>
                            <Typography style={{color: "#ffffff"}}>
                                {this.props.bookInfo.pageCount + " pages"}
                            </Typography>
                            <Typography style={{color: "#A8A8A8"}}>
                                SUMMARY
                            </Typography>
                            <Typography variant="subheading" id="simple-modal-description"
                                        style={{overflowY: "scroll", height: "50%", color: "#ffffff"}}>
                                {this.props.bookInfo.description}
                            </Typography>
                            <Button style={{backgroundColor: "#6EC1E4"}}>Reserve</Button>
                        </Grid>
                    </Grid>
                </Modal>
            </div>
        </Fragment>
        );
    };
}

BookModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookModal);