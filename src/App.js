import {
  BsClock,
  BsFillBookmarkFill,
  BsFillBookmarksFill,
  BsFillHouseFill,
  BsFillHandThumbsUpFill,
  BsFillPauseFill,
  BsPlayFill,
  BsFillPlayCircleFill,
  BsFillGearFill,
} from "react-icons/bs";
import { TiImageOutline } from "react-icons/ti";
import "./App.css";

import Modal from "./Modal";

/* schema: { title: "", artist: "", duration: "", image_url: "", path: ""} */
let sounds = [
	{ title: "Fight Back", artist: "NEFFEX", duration: "3:16", image_url: "https://i.scdn.co/image/ab67616d0000b273bd9e9490d5198c41cb85b669", path: "./sounds/NEFFEX - Fight Back.mp3" },
  { title: "Best of Me", artist: "NEFFEX", duration: "3:59", image_url: "https://i1.sndcdn.com/artworks-000233271395-45pahr-t500x500.jpg", path: "./sounds/NEFFEX - Best of Me.mp3"},
  { title: "Never Give Up", artist: "NEFFEX", duration: "4:11", image_url: "https://i1.sndcdn.com/artworks-000237594251-ibzt3b-t500x500.jpg", path: "./sounds/NEFFEX - Never Give Up.mp3"}
]
var playing = -1;

function isPlaying(sobj) { return !sobj.paused; }

function setup_sound(soundElement){
	let title = soundElement.title;
	let artist = soundElement.artist;
	let duration = soundElement.duration;
	let path = soundElement.path;

  let current_title = document.getElementById('songCurrentlyPlaying')
  let current_time = document.getElementById('songCurrentTime')
  let current_time_slider = document.getElementById('songCurrentTimeSlider')
  let current_max_time = document.getElementById('songLength')

  if(path == undefined){
    path = `${artist} - ${title}.mp3`
  }

	let base = `${title.replace(/\s/g, '')}-${artist}`;
	let btn = document.getElementById(`btn-${base}`);
	let audioFile = document.getElementById(`sound-${base}`);

  let playIcon = '<div class="sidebar-icon"><div class="text-white hover:text-green-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg></div></div>'
  let pauseIcon = '<div class="sidebar-icon"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path></svg></div></div>'

	btn.onclick = function(){
		if (audioFile.paused == true){
      if(playing == -1){
        audioFile.src = path;
        audioFile.play();
        btn.children[0].innerHTML = pauseIcon;
  
        current_title.innerText = `${title} - ${artist}`;
        current_time.innerText = audioFile.currentTime;
        
        current_max_time.innerText = duration;
      } else {
        let soundElement2 = sounds[playing]
        let base2 = `${soundElement2.title.replace(/\s/g, '')}-${soundElement2.artist}`;
        let btn2 = document.getElementById(`btn-${base2}`);
        let audioFile2 = document.getElementById(`sound-${base2}`);

        audioFile2.pause();
        btn2.children[0].innerHTML = playIcon;
        audioFile.src = path;
        audioFile.play();
        btn.children[0].innerHTML = pauseIcon;
  
        current_title.innerText = `${title} - ${artist}`;
        current_time.innerText = audioFile.currentTime;
        
        current_max_time.innerText = duration;
      }
      playing = sounds.indexOf(soundElement)
		} else {
			audioFile.pause();
      btn.children[0].innerHTML = playIcon;
			current_title.innerText = 'Untitled';
			current_time.innerText = "0:00";
			
			current_max_time.innerText = "0:00";
		}
	}

/*
	while(audioFile.paused != true){
		current_time_slider.value = audioFile.currentTime;
	}
*/
}

document.addEventListener('DOMContentLoaded', function(){
  for(let sound of sounds){
    setup_sound(sound)
  }
})

const SideBarIcon = ({ icon, classes }) => {
  return (
    <div className="sidebar-icon">
      <div className={classes}>{icon}</div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 w-1/12 h-screen bg-neutral-900 flex flex-col">
      <a href="/" className="nav__brand font-bold text-green-500 mt-3 mb-6">
        Spoofify
      </a>
      <div className="flex flex-col gap-4 justify-between">
        <div className="upper-container flex flex-col justify-between gap-4 sidebar-main">
          <a href="/" className="sidebar__link">
            <SideBarIcon icon={<BsFillHouseFill size="28" />} classes="hover:text-green-500 active-tab" />
          </a>

          <a href="#" className="sidebar__link">
            <SideBarIcon icon={<BsFillBookmarksFill size="28" />} classes="hover:text-green-500" />
          </a>
        </div>
        <div className="lower-container sidebar-other fixed bottom-0 left-0 w-32 mb-6">
          <a href="#" className="sidebar__link">
            <SideBarIcon icon={<BsFillGearFill size="28" />} classes="hover:text-green-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Player = () => {
  return (
    <div className="player fixed bottom-0 right-0 p-3 h-12 w-11/12 bg-neutral-800 justify-center items-center">
      <div id="player-container" className="flex flex-row justify-center gap-4">
        <span
          id="songCurrentlyPlaying"
          className="text-textLight text-base font-medium"
        >
          Title
        </span>
        <span
          id="songCurrentTime"
          className="text-textLight text-base font-medium"
        >
          1.58
        </span>
        <input
          id="songCurrentTimeSlider"
          type="range"
          max="100"
          defaultValue="100"
          className="cursor-pointer"
          onChange={() => {}}
        />
        <span
          id="songLength"
          className="text-textLight text-base font-medium"
        >2:57</span>
        <button nameClass="btn">
          <SideBarIcon icon={<BsFillHandThumbsUpFill size="18" />} />
        </button>
        <button nameClass="btn">
          <SideBarIcon icon={<BsFillBookmarkFill size="18" />} classes="" />
        </button>
      </div>
    </div>
  );
};

const TrackHeader = () => {
  return (
    <div nameClass="trackHeader flex flex-row mx-auto rounded-sm transition-colors hover:bg-hover cursor-pointer">
      <div className="flex flex-row justify-between p-2 border-b-[1px] border-border mb-2 itmes-center">
        <div className="flex col-span-1 justify-evenly">
          <SideBarIcon
            icon={<BsFillPlayCircleFill size="20" />}
            classes="text-white"
          />
          <SideBarIcon
            icon={<TiImageOutline size="25" />}
            classes="pl-[7px] col-span-1 ml-2"
          />
        </div>
        <span className="text-white">TITLE</span>
        <span className="text-white">ARTIST</span>
        <span className="text-white">
          <SideBarIcon icon={<BsClock size="18px" />} classes="" />
        </span>
      </div>
    </div>
  );
};

const Track = ({ image_url, title, artist, length, sound_url }) => {
  return (
    <div nameClass="track flex flex-row mx-auto rounded-sm transition-colors hover:bg-hover cursor-pointer hover:text-hover">
      <div className="flex flex-row justify-between p-2 items-center">
        <div className="flex col-span-1 justify-evenly">
          <button nameClass="btn" id={`btn-${title.replace(/\s/g, '')}-${artist}`}>
            <SideBarIcon
              icon={<BsPlayFill size="20" />}
              classes="text-white hover:text-green-500"
            />
          </button>
          <img
            src={image_url}
            alt="track img"
            className="col-span-1 w-[40px] h-[40px] ml-2"
          />
        </div>
        <span className="text-white">{title}</span>
        <span className="text-white">{artist}</span>
        <span className="text-white">{length}</span>
        <audio id={`sound-${title.replace(/\s/g, '')}-${artist}`} src={sound_url}/>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="fixed right-0 top-0 w-11/12 z-20">
      <div className="fixed top-0 right-0 w-11/12 grid mx-auto py-2 px-4 mb-2 ">
        <TrackHeader />
        {sounds.map((item, index) => {
          return (
            <Track
              image_url={item.image_url}
              title={item.title}
              artist={item.artist}
              length={item.duration}
              sound_url={item.path}
            />
          );
        })}
      </div>
    </div>
  );
};

/*
function Footer() {
  return (
    <footer className="flex bg-green-500 p-2 justify-center">
      <span className="text-textLight">&copy; Spoofify 2023</span>
    </footer>
  );
}
*/

function App() {
  return (
    <div>
      <Modal title="Welcome" description="Welcome to Spoofify! The #1 Music Platform." button_text="Start"/>

      <div className="App">
        <SideBar />
        <Player />
        <Main />

      </div>
    </div>
  );
}

export default App;
