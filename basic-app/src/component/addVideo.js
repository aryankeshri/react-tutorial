import { useEffect, useState } from 'react';
import './addVideoStyle.css';

const initalStateVideoFormData = {
  title: '',
  views: '',
  time: '1 year ago',
  channel: 'Coder Dost',
  verified: false
}

const AddVideo = ({addVideos, editableVideo, updateHandaler}) => {

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
    if(editableVideo?.title !== '')
      updateHandaler(video);
    else
      addVideos(video);
    setVideo(initalStateVideoFormData);
  };

  useEffect(() => {
    if(editableVideo?.title)
      setVideo(editableVideo);
  }, [editableVideo]);

  return (
    <form >
      <input type="text" name="title" placeholder="title" onChange={changeHandaler} value={video.title}/>
      <input type="text" name="views" placeholder="views" onChange={changeHandaler} value={video.views}/>
      <button onClick={submitHandaler}>{editableVideo?.title? 'Edit' : 'Add'} Video</button>
    </form>
  );
};

export default AddVideo;
export {initalStateVideoFormData};
