import './App.css';

import AddVideo, {initalStateVideoFormData} from './component/addVideo';
import videosDB from './data/videoData';
import VideoList from './component/videoList';
import { useContext, useReducer, useState } from 'react';
import ThemeContext from './context/themeContext';
import VideosContext from './context/videoContext';
import VideoDispatchContext from './context/videoDispatchContext';

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
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <button className={mode} onClick={()=>setMode(mode == 'darkMode'? 'lightMode': 'darkMode')}>Mode</button>
            <div className="App-header">
              <AddVideo editableVideo={editableVideo} />
              <VideoList editVideo={editVideoHandaler} />
            </div>   
            
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
