import { useState } from 'react';
import './addVideoStyle.css';

const initalStateVideoFormData = {
  title: '',
  views: '',
  time: '1 year ago',
  channel: 'Coder Dost',
  verified: false
}

const AddVideo = ({addVideos}) => {

  const [video, setVideo] = useState(initalStateVideoFormData);

  const changeHandaler = (e) => {
    setVideo({
      ...video, 
      [e.target.name]: e.target.value
    })
  };

  const submitHandaler = (e) => {
    e.preventDefault();
    console.log(video);
    addVideos(video);
    setVideo(initalStateVideoFormData);
  };

  return (
    <form >
      <input type="text" name="title" placeholder="title" onChange={changeHandaler} value={video.title}/>
      <input type="text" name="views" placeholder="views" onChange={changeHandaler} value={video.views}/>
      <button onClick={submitHandaler}>Add Video</button>
    </form>
  );
};

export default AddVideo;