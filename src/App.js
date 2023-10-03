import { BsFillBookmarkFill, BsFillBookmarksFill, BsFillHouseFill, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill, BsFillGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import logo from './logo.svg';
import './App.css';

const SideBarIcon = ({ icon }) => {
  return (
    <div className="sidebar-icon">
      {icon}
    </div>
  );
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 w-32 h-screen bg-neutral-900 flex flex-col">
      <a href="/" className="nav__brand font-bold text-green-500 mt-3 mb-6">Spoofify</a>
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col justify-between gap-4 sidebar-main">
          <a href="/" className="">
            <SideBarIcon icon={<BsFillHouseFill size="28"/>}/>
          </a>
          
          <a href="" className="">
            <SideBarIcon icon={<BsFillBookmarksFill size="28"/>}/>
          </a>
        </div>
        <div className="sidebar-other">
          <a href="#" className="">
            <SideBarIcon icon={<BsFillGearFill size="28"/>}/>
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

function Main() {
  return (
    <main>

    </main>
  );
}

function Footer() {
  return (
    <footer className="flex bg-green-500 p-2 justify-center">
      <span className="text-white">&copy; Spoofify 2023</span>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
