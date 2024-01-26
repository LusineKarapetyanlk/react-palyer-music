import { useEffect, useState } from "react";
import useSound from "use-sound";
import playIcon from "/play.svg";
import sendIcon from "/send.png";
import greenCheck from "/green.png";
import heartIcon1 from "/heart.png";
import checkIcon from "/checked.png";
import heartIcon2 from "/emptyheart.png";
import pauseIcon from "/public/pause.png";
import deletebtn from "/public/delete.png";
import "./SongRow.scss"

function SongRow({  
    song, 
    index,
    songData,
    onRowClick, 
    isPlayingAll,
    handlePlayNext,
    setIsPlayingAll,
    currentSongIndex,
    setCurrentSongIndex,

  }) {
  const [isChanged, setIsChanged] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHearted, setIsHearted ] = useState(false);
  const [isDone, setIsDone ] = useState(false);
  const [play, {pause,  sound}] = useSound(song.file);

  useEffect(()=>{
    if (index !==currentSongIndex) {
      if (isPlaying) {
        setIsPlaying(false);
        pause()
      }return
    }
    if (isChanged) {
      setIsChanged(false);
      return;
    }
    setIsPlaying(isPlayingAll)
    isPlayingAll ? play(): pause()

  },[currentSongIndex, isPlayingAll])

  useEffect(() => {
      if (sound) {
        sound.on('end', () => {
          console.log('Audio ended');
            handlePlayNext();
            setIsPlaying(false)
            checked()
        });
      }
    }, [sound]);

  const handlePlayButtonClick = () => {
    if(isPlaying) {
      pause();
      isPlayingAll && setIsPlayingAll(false)
    } else {
      play()
      setIsChanged(true);
      setCurrentSongIndex(index);
    }
    setIsPlaying(!isPlaying);

  };

const hearting = () =>{ 
  setIsHearted(!isHearted)
}
function checked () { 
  setIsDone(!isDone)
}
function deleteSong () { 
  if (index < songData.length) {
    songData.splice(index, 1);
  }
}
  return (
    <div className={`SongRow ${isPlaying ? "SongRow_active" : ""}  `} onClick={onRowClick}>
      <div className="songrow_column SongRow_playButton" onClick={handlePlayButtonClick}>
        <img src={isPlaying  ? pauseIcon : playIcon} width={15} />
      </div> 
      <div className="songrow_column SongRow_songName">{song.name}</div>
      <div className="songrow_column SongRow_artistName">{song.artist}</div>
      <div className="songrow_column SongRow_trackNumber">{song.trackNumber}</div>
      <div className="songrow_column SongRow_settings">
        <img className="song_heart" src={isHearted ? heartIcon1 : heartIcon2} 
              width={20} 
              height={20}
              onClick={hearting}
         />
        <img src={isDone ? greenCheck : checkIcon} 
              width={20} 
              height={20}
        />
        <a
            href={song.file}
            download={`${song.name.replace(/\s/g, '_')}.mp3`}> 
            <img src={sendIcon} width={20} height={20}/>
        </a>
       
        <img className="delete_btn" 
              src={deletebtn} 
              width={20} 
              height={20} 
              onClick={deleteSong}
          />       
      </div>  
    </div>
  )
}


export default SongRow
