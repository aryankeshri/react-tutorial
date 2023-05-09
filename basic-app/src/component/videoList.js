import Video from './video';
import PlayButton from './UI/playButton';

const VideoList = ({videos, deleteVideo, editVideo}) => {
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
        deleteVideo={deleteVideo}
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