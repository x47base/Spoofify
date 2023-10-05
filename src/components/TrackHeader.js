import {
    BsClock,
    BsFillPlayCircleFill,
  } from "react-icons/bs";
import {TiImageOutline} from "react-icons/ti"
import SideBarIcon from './SideBarIcon';
import './TrackHeader.css';

export default function TrackHeader() {
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