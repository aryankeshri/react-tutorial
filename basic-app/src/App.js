import './App.css';

import AddVideo, {initalStateVideoFormData} from './component/addVideo';
import videosDB from './data/videoData';
import VideoList from './component/videoList';
import { useContext, useReducer, useState } from 'react';
import ThemeContext from './context/themeContext';

function App() {
  const [editableVideo, setEditiableVideo] = useState(initalStateVideoFormData);

  const videoReducer = (videos, action) => {
    switch(action.type){
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id:videos.length+1}
        ];
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload?.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditiableVideo(initalStateVideoFormData)
        return newVideos;
      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  // const themeContext = useContext(ThemeContext);
  const [mode, setMode] = useState('darkMode');

  const editVideoHandaler = (id) =>{
    setEditiableVideo(videos.find(video => video.id === id))
  };

  return (
    <ThemeContext.Provider value={mode}>
      
      <div className={`App ${mode}`}>
        <button className={mode} onClick={()=>setMode(mode == 'darkMode'? 'lightMode': 'darkMode')}>Mode</button>
        <div className="App-header">
          <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
          <VideoList videos={videos} editVideo={editVideoHandaler} dispatch={dispatch} />
        </div>   
        
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
