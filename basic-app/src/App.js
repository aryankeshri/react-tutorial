import './App.css';

import AddVideo, {initalStateVideoFormData} from './component/addVideo';
import videosDB from './data/videoData';
import VideoList from './component/videoList';
import { useState } from 'react';

function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditiableVideo] = useState(initalStateVideoFormData);

  const addVideos = (newVideo) => {
    setVideos([
      ...videos,
      { ...newVideo, id:videos.length+1}
    ]);
  };

  const editVideoHandaler = (id) =>{
    setEditiableVideo(videos.find(video => video.id === id))
  }

  const updateHandaler = (video) => {
    const index = videos.findIndex(v => v.id === video?.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }

  const deleteVideoHandaler = (id) => {
    setVideos(videos.filter(video => video.id !== id))    
  };

  return (
    <div className="App">
      <div className="App-header">
        <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateHandaler={updateHandaler} />
        <VideoList videos={videos} editVideo={editVideoHandaler} deleteVideo={deleteVideoHandaler} />
      </div>   
      
    </div>
  );
};

export default App;
