import './App.css';

import AddVideo from './component/addVideo';
import videosDB from './data/videoData';
import VideoList from './component/videoList';
import { useState } from 'react';

function App() {
  const [videos, setVideos] = useState(videosDB);

  const addVideos = (newVideo) => {
    setVideos([
      ...videos,
      { ...newVideo, id:videos.length+1}
    ]);
  }

  return (
    <div className="App">
      <div className="App-header">
        <AddVideo addVideos={addVideos} />
        <VideoList videos={videos} />
      </div>   
      
    </div>
  );
};

export default App;
