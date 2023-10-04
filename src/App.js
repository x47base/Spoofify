import {
  BsClock,
  BsFillBookmarkFill,
  BsFillBookmarksFill,
  BsFillHouseFill,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsPlayFill,
  BsFillPlayCircleFill,
  BsFillGearFill,
} from "react-icons/bs";
import { TiImageOutline } from "react-icons/ti";
import "./App.css";

import Modal from "./Modal";

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

const create_audio = ({ id, src }) => {
  var sound = document.createElement("audio"); 
  sound.id = {id}
  sound.src = {src}
  return sound
}

const play_audio = ({ src, sound }) => {
  sound.src = src
  sound.play()
}



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
        <span className="text-white">AUTHOR</span>
        <span className="text-white">
          <SideBarIcon icon={<BsClock size="18px" />} classes="" />
        </span>
      </div>
    </div>
  );
};

const Track = ({ image_url, title, author, album, length, url }) => {
  return (
    <div nameClass="track flex flex-row mx-auto rounded-sm transition-colors hover:bg-hover cursor-pointer hover:text-hover">
      <div className="flex flex-row justify-between p-2 items-center">
        <div className="flex col-span-1 justify-evenly">
          <button nameClass="btn" data-trackId="">
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
        <span className="text-white">{author}</span>
        <span className="text-white">{length}</span>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="fixed right-0 top-0 w-11/12 z-20">
      <div className="fixed top-0 right-0 w-11/12 grid mx-auto py-2 px-4 mb-2 ">
        <TrackHeader />
        <Track
          image_url="https://upload.wikimedia.org/wikipedia/en/b/b5/Ascend_Illenium_album.jpg"
          title="Ascend"
          author="Illenium"
          length="2:87"
        />
        <Track
          image_url="https://upload.wikimedia.org/wikipedia/en/b/b5/Ascend_Illenium_album.jpg"
          title="Ascend"
          author="Illenium"
          length="2:87"
        />
        <Track
          image_url="https://upload.wikimedia.org/wikipedia/en/b/b5/Ascend_Illenium_album.jpg"
          title="Ascend"
          author="Illenium"
          length="2:87"
        />
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
      <Modal title="Welcome" description="Welcome to Spoofify! The #1 Music Platform." button_text="Close"/>

      <div className="App">
        <SideBar />
        <Player />
        <Main />

      </div>
    </div>
  );
}

export default App;
