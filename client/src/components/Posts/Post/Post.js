import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const classes = useStyle();

  const handleDeletePost = () => {
    setDeleteDialog(true);
    dispatch(deletePost(post._id, post));
    handleCloseDialog();
    setIsDelete(true);
  };
 
  
  const handleCloseDialog = () => {
    setDeleteDialog(false);
  };
  return (
    <>
      <Dialog onClose={handleCloseDialog} open={deleteDialog}>
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeletePost}>Yes</Button>
          <Button onClick={handleCloseDialog} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      {!isDelete && (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={post.selectedFile}
            title={post.title}
          />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
          <div className={classes.overlay2}>
            {/* 3dot button  - for updateing post we have to pass current user id to form by passing it to onClick function , it can done*/}
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={() => setCurrentId(post._id)}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">
              {post.tag}
            </Typography>
          </div>
          <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>
              {post.message}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              size="small"
              color="primary"
              onClick={() => setDeleteDialog(true)}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Post;
