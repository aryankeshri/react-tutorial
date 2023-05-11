import {useContext, useState} from 'react';
import './playButtonStyle.css';
import ThemeContext from '../../context/themeContext';


const PlayButton = ({children, onPlay, onPause}) => {
  const [play, setPlay] = useState(false);
  const themeContext = useContext(ThemeContext)

  const clickHandaler = (e) => {
    console.log(e);
    e.stopPropagation();
    if(play) onPause(); else onPlay();
    setPlay(!play);
  };

  return (
    <>
      <button className={themeContext} onClick={clickHandaler} >{children} : {play?'>':'||'}</button>
    </>
  );
}

export default PlayButton;
