import "./SongRow.scss"
import PropTypes from 'prop-types';
import playIcon from "/play.svg";
import heartIcon from "/heart.png";
import checkIcon from "/checked.png";
import sendIcon from "/send.png";
import downIcon from "/down.png";

function SongRow({song}) {

  return (
    
    <div className="SongRow">
      <div className="songrow_column SongRow_playButton">
        <img src={playIcon} width={15}/>
      </div> 
      <div className="songrow_column SongRow_songName">{song.name}</div>
      <div className="songrow_column SongRow_artistName">{song.artist}</div>
      <div className="songrow_column SongRow_trackNumber">{song.trackNumber}</div>
      <div className="songrow_column SongRow_settings">
        <img src={heartIcon} width={20}/>
        <img src={checkIcon} width={20}/>
        <img src={sendIcon} width={20}/>
        <img src={downIcon} width={20}/>       
      </div>  
    </div>
  )
}
SongRow.propTypes = {
  song:  PropTypes.shape({
      artist: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      trackNumber: PropTypes.number.isRequired,
      // Add more prop types based on your data structure
    }).isRequired,
};

export default SongRow
