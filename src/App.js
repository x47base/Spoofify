import { BsClock, BsFillBookmarkFill, BsFillBookmarksFill, BsFillHouseFill, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill, BsPlayFill, BsFillPlayCircleFill, BsFillGearFill } from 'react-icons/bs'
import logo from './logo.svg';
import './App.css';


const SideBarIcon = ({ icon, classes }) => {
  return (
    <div className="sidebar-icon">
      <div className={classes}>{icon}</div>
    </div>
  );
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 w-1/12 h-screen bg-neutral-900 flex flex-col">
      <a href="/" className="nav__brand font-bold text-green-500 mt-3 mb-6">Spoofify</a>
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col justify-between gap-4 sidebar-main">
          <a href="/" className="">
            <SideBarIcon icon={<BsFillHouseFill size="28"/>} classes=""/>
          </a>
          
          <a href="#" className="">
            <SideBarIcon icon={<BsFillBookmarksFill size="28"/>} classes=""/>
          </a>
        </div>
        <div className="sidebar-other fixed bottom-0 left-0 w-32 mb-6">
          <a href="#" className="">
            <SideBarIcon icon={<BsFillGearFill size="28"/>} classes=""/>
          </a>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="p-2">
      <SideBar/>
    </header>
  );
}

const Player = () => {
  return (
    <div className="fixed bottom-0 right-0 p-3 h-12 w-11/12 bg-neutral-800 justify-center items-center">
      <div id="player-container" className="flex flex-row justify-center gap-4">
        <span id="songCurrentlyPlaying" className="text-textLight text-base font-medium">
          Title
        </span>
        <span id="songCurrentTime" className="text-textLight text-base font-medium">1.58</span>
        <input type="range" max="100" defaultValue="100" className="cursor-pointer"
          onChange={() => {}}
        />
        <span></span>
        <button nameClass="btn"><SideBarIcon icon={<BsFillHandThumbsUpFill size="18" />}/></button>
        <button nameClass="btn"><SideBarIcon icon={<BsFillBookmarkFill size="18" />} classes=""/></button>
      </div>
    </div>
  );
}

const TableHeader = () => {
  return (
    <div className="fixed top-0 right-0 w-11/12 grid grid-cols-player mx-auto py-2 px-4 mb-2 border-b-[1px] border-border">
      <span className="col-span-1 text-textLight">#</span>
      <span className="col-span-5 text-textLight">TITLE</span>
      <span className="col-span-5 text-textLight">ALBUM</span>
      <span className="col-span-1 text-textLight">
        <SideBarIcon icon={<BsClock size="18px" />} classes=""/>
      </span>
    </div>
  );
}

const Track = ({image_url, title, author, album, length, url}) => {
  return (
    <div nameClass="right-2 grid grid-cols-player mx-auto px-4 py-2 rounded-sm transition-colors hover:bg-hover cursor-pointer" width="128px" height="32px">
      <div className="col-span-1 flex items-center">
      <button nameClass="btn" data-trackId=""><SideBarIcon icon={<BsPlayFill size="20" />} classes="hover:text-green-500" /></button>
        <img src={image_url} className="w-[40px] h-[40px] ml-2" />
      </div>
      <div className="col-span-5 flex flex-col items-start justify-start">
        <span className="text-textLight font-semibold">{title}</span>
        <span>{author}</span>
      </div>
      <div className="col-span-5 flex items-center justify-start">{album}</div>
      <div className="col-span-1 flex items-center justify-start">{length}</div>
    </div>
  );
}

const Main = () => {
  return (
    <div nameClass="fixed top-0 right-0 max-w-11/12 w-11/12 text-textLight">
      <TableHeader/>
      <Track image_url="https://upload.wikimedia.org/wikipedia/en/b/b5/Ascend_Illenium_album.jpg" title="Ascend" author="Illenium"  length="2:87"/>

    </div>
  );
}

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
    <div className="App">
      <SideBar />
      <Player />
      <Main />

      
    </div>
  );
}

export default App;
