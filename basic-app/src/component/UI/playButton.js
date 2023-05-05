import {useState} from 'react';
import './playButtonStyle.css';


const PlayButton = ({children, onPlay, onPause}) => {
  const [play, setPlay] = useState(false);

  const clickHandaler = (e) => {
    console.log(e);
    e.stopPropagation();
    if(play) onPause(); else onPlay();
    setPlay(!play);
  };

  return (
    <>
      <button onClick={clickHandaler} >{children} : {play?'>':'||'}</button>
    </>
  );
}

export default PlayButton;
