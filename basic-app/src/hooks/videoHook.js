import {useContext} from 'react';
import VideosContext from '../context/videoContext';

const useVideos = () => {
  return useContext(VideosContext);
}

export default useVideos;
