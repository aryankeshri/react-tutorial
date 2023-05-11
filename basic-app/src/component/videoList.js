import Video from './video';
import PlayButton from './UI/playButton';
// import { useContext } from 'react';
// import VideosContext from '../context/videoContext';
import useVideos from '../hooks/videoHook';

const VideoList = ({editVideo}) => {
  const videos = useVideos();
  // const videos = useContext(VideosContext)
  
  return (
    <>
    {
      videos.map((video) => <Video
        key={video.id}
        title={video.title}
        views={video.views}
        time={video.time}
        channel={video.channel}
        verified={video.verified}
        id={video.id}
        editVideo={editVideo}
        >
        <PlayButton 
          onPlay={() => {alert('Play')}} 
          onPause={() => {alert('Pause')}}
        >{video.title}
        </PlayButton>
      </Video>
      )
    }      
    </>
  )
}

export default VideoList;