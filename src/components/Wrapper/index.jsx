import Navbar from "../Navbar"
import SongList from "../SongList"
import MusicUploadForm from "../MusicUploadForm"
import "./wrapper.scss"
import { useState } from "react"
// import { useState } from "react"

function Wrapper() {
  const Data = [
    {
      artist:"Adam",
      file:"/audio/Adam-Zurek.mp3",
      name:" Zhurek Isko Alvarez remix",
      trackNumber:1
    },
    {
      artist:"Ed Sheran",
      file:"/audio/Shape of You.mp3",
      name:" Shape of You",
      trackNumber:2
    },
    {
      artist:"Ed Sheran2",
      file:"/audio/Shape of You.mp3",
      name:" Shape of You",
      trackNumber:3
    },
    {
      artist:"Ed Sheran3",
      file:"/audio/Shape of You.mp3",
      name:" Shape of You",
      trackNumber:5
    }
  ]
  const [songData, setSongData] = useState(Data)

  return (
    <div className="wrapper">
        <div>
          <Navbar songData={songData}/>
          <SongList songData={songData}/>
        </div>
        <MusicUploadForm songData={songData} setSongData={setSongData} />
    </div>
  )
}

export default Wrapper
