import Track from '../components/Track';
import TrackHeader from '../components/TrackHeader';
import './Main.css';

export default function Main({ sounds, sound_length_to_text }){
    return (
      <div className="maintab right-0 top-0 w-11/12 z-0">
        <div className="tracks-container fixed top-0 right-0 w-11/12 max-h-[42.4rem] h-screen overflow-y-auto mx-auto py-2 px-4 mb-6">
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