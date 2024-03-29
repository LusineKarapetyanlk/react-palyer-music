
import trackIcon from "/public/track.png";
import pauseIcon from "/public/pause.png";
import playIcon from "/public/play.svg";
import downIcon from "/public/down.png";
import search from "/search.png";
import "./Navbar.scss";

export default function Navbar({
  setIsPlayingAll,
  isPlayingAll,
}) {

 const handleClick = () => {
  setIsPlayingAll(!isPlayingAll)
 }

  return (
    <>
      <div className="navbar_wrapper">
        <div className="navbar_first_div">
          <button className="navbar_buttons" onClick={ handleClick }>
           
            {isPlayingAll ? < >
              <img src={pauseIcon} width={15}/>  
              <p>Pause </p>
            </> 
            : < >
              <img src={playIcon} width={15}/>  
              <p>Play All </p>
            </>  }

          </button>
          <button className="navbar_buttons"> 
            <p>+ Add All </p>
            <img src={downIcon} width={10}/>
          </button>
        </div>
        <div className="navbar_second_div">
          <button className="navbar_buttons"> 
            <img src={trackIcon} width={15}/>
            <p>
              Track
            </p>
            <img src={downIcon} width={10}/>
          </button>
          <div className="navbar_input_wrap">
            <span className="navbar_search_icon"><img src={search} width={20}/></span>
            <input type="text" placeholder="Filter" id="navbar_search_input"></input>
          </div>
        </div>
      </div>
      
    </>
  )
}
