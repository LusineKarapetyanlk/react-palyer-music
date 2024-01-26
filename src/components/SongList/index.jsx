import { useRef, useState } from "react";
import SongRow from "../SongRow";
import "./SongList.scss";

function SongList({ 
    songData, 
    playedSound, 
    isPlayingAll,
    handlePlayNext,
    currentSongIndex, 
    setCurrentSongIndex,
  
  }) {
  const [currentSongSrc, setCurrentSongSrc] = useState(null);
  const audioRef = useRef(null);

  const handleRowClick = (file) => {
    // Update the current row index when a row is clicked
    setCurrentSongSrc(file);
  
  };

  return (
    <div className="songlist_container">
      <div className="songlist_header">
        <div className="songlist_header_column songlist_header_column1"> </div>
        <div className="songlist_header_column songlist_header_column2"> SongName</div>
        <div className="songlist_header_column songlist_header_column3"> ArtistName</div>
        <div className="songlist_header_column songlist_header_column4"> Track</div>
        <div className="songlist_header_column songlist_header_column5"> </div>
      </div>
      {
        songData?.map((el,i)=>{
        return  <SongRow key={i} 
              song={el}
              index={i}
              songData={songData}
              audioRef={audioRef}
              playedSound={playedSound}
              isPlayingAll={isPlayingAll}
              handlePlayNext={handlePlayNext}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              currentSongSrc={i === currentSongSrc} 
              onRowClick={() => handleRowClick(el.file)}
          />
        })
      }
    
    </div>
  )
}

export default SongList
