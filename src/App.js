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

import Form from "./components/Form";
import Modal from "./components/Modal";

/* schema: { title: "", artist: "", duration: 0, image_url: "", path: ""} */
let sounds = [
  { title: "Invincible", artist: "DEAF KEV", duration: 213, image_url: "https://i1.sndcdn.com/artworks-000224592805-nhfd2x-t500x500.jpg", path: "./sounds/DEAF KEV - Invincible [NCS Release] [J2X5mJ3HDYE].mp3" },
  { title: "Invisible", artist: "Julius Dreisig & Zeus feat. Crona", duration: 201, image_url: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/548/1000x0/invisible-1586956245-t2ybbYq7Q8.jpg", path: "./sounds/Julius Dreisig & Zeus X Crona - Invisible [NCS Release] [QglaLzo_aPk].mp3" },
  { title: "Fight Back", artist: "NEFFEX", duration: 196, image_url: "https://i.scdn.co/image/ab67616d0000b273bd9e9490d5198c41cb85b669", path: "./sounds/Neffex - Fight Back.mp3" },
  { title: "Best of Me", artist: "NEFFEX", duration: 239, image_url: "https://i1.sndcdn.com/artworks-000233271395-45pahr-t500x500.jpg", path: "./sounds/NEFFEX - Best of Me.mp3" },
  { title: "Never Give Up", artist: "NEFFEX", duration: 251, image_url: "https://i1.sndcdn.com/artworks-000237594251-ibzt3b-t500x500.jpg", path: "./sounds/NEFFEX - Never Give Up.mp3" },

];
var playing = -1;

function sound_length_to_text(duration) {
  let a = (duration / 60).toFixed(2).toString().replace(".", ":");
  return a;
}

let playingInterval;

function startPlaying() {
  playingInterval = setInterval(updateSlider, 1000);
}

function stopPlaying() {
  clearInterval(playingInterval);
}

function updateSlider() {
  let soundElement = sounds[playing];
  let base = `${soundElement.title.replace(/\s/g, "")}-${soundElement.artist}`;
  let audioFile = document.getElementById(`sound-${base}`);
  let current_image = document.getElementById("songImagePlaying");
  let current_time = document.getElementById("songCurrentTime");
  let current_max_time = document.getElementById("songLength");
  let current_time_slider = document.getElementById("songCurrentTimeSlider");
  let duration = audioFile.duration;

  if (!isNaN(duration)) {
    const currentTime = (audioFile.currentTime / duration) * 100;
    current_time_slider.value = currentTime;
    current_time.innerText = sound_length_to_text(audioFile.currentTime);
    current_max_time.innerText = sound_length_to_text(duration);
  }
}

function setup_sound(soundElement) {
  let title = soundElement.title;
  let artist = soundElement.artist;
  let duration = soundElement.duration;
  let path = soundElement.path;

  let current_image = document.getElementById("songImagePlaying");
  let current_title = document.getElementById("songCurrentlyPlaying");
  let current_time = document.getElementById("songCurrentTime");
  let current_time_slider = document.getElementById("songCurrentTimeSlider");
  let current_max_time = document.getElementById("songLength");
  let player_btn = document.getElementById('player-play-btn');

  if (path == undefined) {
    path = `${artist} - ${title}.mp3`;
  }

  let base = `${title.replace(/\s/g, "")}-${artist}`;
  let btn = document.getElementById(`btn-${base}`);
  let audioFile = document.getElementById(`sound-${base}`);

  let playIcon =
    '<div class="sidebar-icon"><div class="text-white hover:text-green-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg></div></div>';
  let pauseIcon =
    '<div class="sidebar-icon"><div class="text-white hover:text-green-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path></svg></div></div>';

  btn.onclick = function () {
    if (audioFile.paused == true) {
      if (playing != -1) {
        let soundElement2 = sounds[playing];
        let base2 = `${soundElement2.title.replace(/\s/g, "")}-${soundElement2.artist}`;
        let btn2 = document.getElementById(`btn-${base2}`);
        let audioFile2 = document.getElementById(`sound-${base2}`);
        
        if(current_image == soundElement.image_url){
          audioFile2.play()

          btn2.children[0].innerHTML = pauseIcon;
          player_btn.children[0].innerHTML = pauseIcon;
          

        } else {
          audioFile2.pause();
          btn2.children[0].innerHTML = playIcon;
        }
      }

      audioFile.src = path;
      audioFile.play();
      startPlaying();
      btn.children[0].innerHTML = pauseIcon;
      player_btn.children[0].innerHTML = pauseIcon;

      current_image.src = soundElement.image_url
      current_title.innerText = `${title} - ${artist}`;
      current_time.innerText = audioFile.currentTime;

      current_max_time.innerText = sound_length_to_text(audioFile.duration);

      playing = sounds.indexOf(soundElement);
    } else {
      audioFile.pause();
      stopPlaying();
      btn.children[0].innerHTML = playIcon;
      player_btn.children[0].innerHTML = playIcon;
    }
  };

  /*
	while(audioFile.paused != true){
		current_time_slider.value = audioFile.currentTime;
	}
*/
}

function start_song(index){
  
}

document.addEventListener("DOMContentLoaded", function () {
  for (let sound of sounds) {
    setup_sound(sound);
  }

  let player_btn = document.getElementById('player-play-btn');
  player_btn.addEventListener('click', function(){
    let current_image = document.getElementById("songImagePlaying");
    let current_title = document.getElementById("songCurrentlyPlaying");
    let current_time = document.getElementById("songCurrentTime");
    let current_time_slider = document.getElementById("songCurrentTimeSlider");
    let current_max_time = document.getElementById("songLength");

    let playIcon =
    '<div class="sidebar-icon"><div class="text-white hover:text-green-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg></div></div>';
  let pauseIcon =
    '<div class="sidebar-icon"><div class="text-white hover:text-green-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path></svg></div></div>';


    if (playing == -1) {
      playing = 0
      let soundElement = sounds[playing];
      let base = `${soundElement.title.replace(/\s/g, "")}-${soundElement.artist}`;
      let btn = document.getElementById(`btn-${base}`);
      let audioFile = document.getElementById(`sound-${base}`);

      let path = soundElement.path;

      audioFile.src = path;
      audioFile.play();
      startPlaying();
      btn.children[0].innerHTML = pauseIcon;
      player_btn.children[0].innerHTML = pauseIcon;

      current_image.src = soundElement.image_url
      current_title.innerText = `${soundElement.title} - ${soundElement.artist}`;
      current_time.innerText = audioFile.currentTime;

      current_max_time.innerText = sound_length_to_text(audioFile.duration);

      playing = sounds.indexOf(soundElement);
    } else {
      if (player_btn.children[0].innerHTML == playIcon){
        let soundElement = sounds[playing]

        let base = `${soundElement.title.replace(/\s/g, "")}-${soundElement.artist}`;
        let btn = document.getElementById(`btn-${base}`);
        let audioFile = document.getElementById(`sound-${base}`);
  
        audioFile.play();
        player_btn.children[0].innerHTML = pauseIcon;
        btn.children[0].innerHTML = pauseIcon;
      } else {
        let soundElement = sounds[playing]

        let base = `${soundElement.title.replace(/\s/g, "")}-${soundElement.artist}`;
        let btn = document.getElementById(`btn-${base}`);
        let audioFile = document.getElementById(`sound-${base}`);
  
        audioFile.pause();
        player_btn.children[0].innerHTML = playIcon;
        btn.children[0].innerHTML = playIcon;
      }
    }

  })

  let current_time_slider = document.getElementById("songCurrentTimeSlider");
  current_time_slider.addEventListener("input", () => {
    if (playing != -1) {
      let soundElement = sounds[playing];
      let base = `${soundElement.title.replace(/\s/g, "")}-${
        soundElement.artist
      }`;
      let btn = document.getElementById(`btn-${base}`);
      let audioFile = document.getElementById(`sound-${base}`);
      let percentage = current_time_slider.value;
      let duration = audioFile.duration;

      if (!isNaN(duration)) {
        const currentTime = (percentage / 100) * duration;
        audioFile.currentTime = currentTime;
      }
    }
  });

  // ...
});

const SideBarIcon = ({ icon, classes }) => {
  return (
    <div className="sidebar-icon">
      <div className={classes}>{icon}</div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar z-20 fixed top-0 left-0 w-1/12 h-screen bg-neutral-900 flex flex-col">
      <a href="/" className="nav__brand font-bold text-green-500 mt-3 mb-6">
        Spoofify
      </a>
      <div className="flex flex-col gap-4 justify-between">
        <div className="upper-container flex flex-col justify-between gap-4 sidebar-main">
          <a href="/" className="sidebar__link">
            <SideBarIcon
              icon={<BsFillHouseFill size="28" />}
              classes="hover:text-green-500 active-tab"
            />
          </a>

          <a href="#" className="sidebar__link">
            <SideBarIcon
              icon={<BsFillBookmarksFill size="28" />}
              classes="hover:text-green-500"
            />
          </a>
        </div>
        <div className="lower-container sidebar-other fixed bottom-0 left-0 w-32 mb-6">
          <a href="#" className="sidebar__link">
            <SideBarIcon
              icon={<BsFillGearFill size="28" />}
              classes="hover:text-green-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Player = () => {
  return (
    <div className="player z-20 fixed bottom-0 right-0 p-3 h-16 w-11/12 bg-neutral-800 justify-center items-center">
      <div id="player-container" className="grid grid-cols-[auto,1fr,1fr,auto] text-left justify-center items-center gap-4">
        <div className="flex flex-row gap-2 justify-center items-center">
          <img id="songImagePlaying" className="no-image"/>
          <span
            id="songCurrentlyPlaying"
            className="text-textLight text-base font-medium w-[420px]"
          >
            Untitled
          </span>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <button id="player-play-btn">
            <SideBarIcon
              icon={<BsPlayFill size="20" />}
              classes="text-white hover:text-green-500"
            />
          </button>
          <span
            id="songCurrentTime"
            className="text-textLight text-base font-medium"
          >
            0:00
          </span>
          <input
            id="songCurrentTimeSlider"
            type="range"
            max="100"
            defaultValue="100"
            className="cursor-pointer"
            onChange={() => {}}
          />
          <span id="songLength" className="text-textLight text-base font-medium">
            0:00
          </span>
        </div>
        <div></div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <button nameClass="btn">
            <SideBarIcon icon={<BsFillHandThumbsUpFill size="18" />} />
          </button>
          <button nameClass="btn">
            <SideBarIcon icon={<BsFillBookmarkFill size="18" />} classes="" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TrackHeader = () => {
  return (
    <div className="trackHeader mx-auto rounded-sm transition-colors hover:bg-hover cursor-pointer w-full text-left">
      <div className="grid grid-cols-[auto,1fr,1fr,auto] gap-2 p-2 border-b-[1px] border-border mb-2 items-center">
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
    <div className="track mx-auto rounded-sm transition-colors hover:bg-hover cursor-pointer hover:text-hover w-full text-left">
      <div className="grid grid-cols-[auto,1fr,1fr,auto] gap-2 p-2 items-center">
        <div className="flex col-span-1 justify-evenly">
          <button
            className="btn"
            id={`btn-${title.replace(/\s/g, "")}-${artist}`}
          >
            <SideBarIcon
              icon={<BsPlayFill size="20" />}
              classes="text-white hover:text-green-500"
            />
          </button>
          <img
            src={image_url}
            alt="track img"
            className="w-[40px] h-[40px] ml-2"
          />
        </div>
        <span className="text-white">{title}</span>
        <span className="text-white">{artist}</span>
        <span className="text-white">{length}</span>
        <audio
          id={`sound-${title.replace(/\s/g, "")}-${artist}`}
          src={sound_url}
        />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="right-0 top-0 w-11/12 z-0">
      <div className="tracks-container fixed top-0 right-0 w-11/12 h-[42.4rem] overflow-y-auto mx-auto py-2 px-4 mb-6">
        <TrackHeader />
        {sounds.map((item, index) => {
          return (
            <Track
              image_url={item.image_url}
              title={item.title}
              artist={item.artist}
              length={sound_length_to_text(item.duration)}
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

/* Example Register Form

      <Form title="Create Account" submit_text="Register"
        inputs = {[
          { action: "/", method: "POST", type: "email", name: "p-email", placeholder: "example@gmail.com", minLength: "" },
          { action: "/", method: "POST", type: "password", name: "p-password", placeholder: "Password", minLength: "8" },
        ]}/>
*/

function App() {
  return (
    <div>
      <Modal
        title="Welcome"
        description="Welcome to Spoofify! The #1 Music Platform."
      />

      <div className="App">
        <SideBar />
        <Player />
        <Main />
      </div>
    </div>
  );
}

export default App;
