import {useContext} from 'react';
import VideoDispatchContext from '../context/videoDispatchContext';

const useVideoDispatch = () => {
  return useContext(VideoDispatchContext);
}

export default useVideoDispatch;
