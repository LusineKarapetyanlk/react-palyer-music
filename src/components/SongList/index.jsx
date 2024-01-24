import SongRow from "../SongRow"
import "./SongList.scss"

function SongList({songData}) {
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
          return <SongRow key={i} song={el}/>
        })
      }
    
    </div>
  )
}

export default SongList
