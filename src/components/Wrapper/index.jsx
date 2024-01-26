import { useRef, useState } from "react";
import MusicUploadForm from "../MusicUploadForm";
import { songs } from "../../helpers";
import SongList from "../SongList";
import Navbar from "../Navbar";
import "./wrapper.scss";

function Wrapper() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [songData, setSongData] = useState(songs);
  const playedSound = useRef(null);

  const handlePlayNext = () => {
    setCurrentSongIndex(currentSongIndex + 1);
  }

  return (
    <div className="wrapper">
        <div>
          <Navbar songData={songData} 
            playedSound={playedSound}
            isPlayingAll={isPlayingAll}
            setIsPlayingAll={setIsPlayingAll}
            currentSongIndex={currentSongIndex}
          />

          <SongList songData={songData} 
            playedSound={playedSound} 
            isPlayingAll={isPlayingAll}
            handlePlayNext={handlePlayNext}
            setIsPlayingAll={setIsPlayingAll}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
          />
        </div>
       
        <MusicUploadForm songData={songData} setSongData={setSongData}  />
       
    </div>
  )
}

export default Wrapper
