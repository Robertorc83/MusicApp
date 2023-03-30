import { useState, useRef } from "react";

import { Song } from "../../interfaces";
import SoundController from "./SoundController/SoundController";
import SongDetails from "./SongDetails/SongDetails";
import MusicPlayerControls from "./MusicPlayerControls/MusicPlayerControls";

interface MediaPlayerProps {
  songs?: Song[] | Song;
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  isPLaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

function MediaPlayer({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  isPLaying,
  setIsPlaying,
}: MediaPlayerProps) {
  const audioRef = useRef<HTMLMediaElement>(null);
  const [volume, setVolume] = useState(1);

  return (
    <div className='bg-main w-full lg:w-screen mt-10 lg:mt-0 absolute left-0 lg:bottom-0 grid md:grid-cols-3 md:h-24 justify-items-center md:justify-items-stretch'>
      <SongDetails songs={songs} currentSongIndex={currentSongIndex} />
      <MusicPlayerControls
        songs={songs}
        currentSongIndex={currentSongIndex}
        ref={audioRef}
        setCurrentSongIndex={setCurrentSongIndex}
        isPLaying={isPLaying}
        setIsPlaying={setIsPlaying}
      />
      <SoundController volume={volume} setVolume={setVolume} ref={audioRef} />
    </div>
  );
}

export default MediaPlayer;
