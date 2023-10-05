import {
    BsPlayFill,
  } from "react-icons/bs";
import SideBarIcon from './SideBarIcon';
import './Track.css';

export default function Track ({ image_url, title, artist, length, sound_url }) {
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