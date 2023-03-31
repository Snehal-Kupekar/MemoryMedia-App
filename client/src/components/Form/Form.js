import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyle from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {


  const [postData, setPostData] = useState({
    userId : "",
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  
  const [isPostUpdated, setIsPostUpdate] = useState(false);

  const currUser = JSON.parse(localStorage.getItem('profile'));
  const currUserId = currUser.result._id;
  console.log("current user from form.js",currUser.result._id);

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("postdata",postData);
    if (currUserId) 
    setIsPostUpdate(false);
  },[isPostUpdated]);


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      userId:"",
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  
  // const currentUser = useSelector((state) => state.users.authData.result._id);


  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currUserId) {
      setPostData({...postData,userId:currUserId})
      setIsPostUpdate(true);
    };

    if (currentId === null) {
      dispatch(createPost(postData));
      console.log("inside createpost");
      
      clear();
      
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  // setPostData({ ...postData, userId: currentId});

  // console.log(setPostData());
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography varient="h6">
          {currentId ? `Editing "${post.title}" ` : "Creating the memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tag"
          variant="outlined"
          label="Tag"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

// import { updatePost } from '../../../../server/controller/posts';

//GET CURRENT ID OF POST - required for updateing the form
//  so write a function such that when we click 3 dot button placed at right up corner of a particular user
// then it should redirect to that form using user_id so that now user can edit it

// const post = > autofill the data in form as per selected id so that only modification can be done
