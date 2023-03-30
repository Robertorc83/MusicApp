import React, { useEffect, useState } from "react";

import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Song } from "../../../interfaces";
import { useMusicPlayer } from "../../../hooks/useMusicPlayer/useMusicPlayer";

type MusicPlayerControlsProps = {
  songs?: Song[] | Song;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  currentSongIndex: number;
  isPLaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const MusicPlayerControls = React.forwardRef<
  HTMLMediaElement,
  MusicPlayerControlsProps
>((props, ref) => {
  const {
    songs,
    setCurrentSongIndex,
    currentSongIndex,
    isPLaying,
    setIsPlaying,
  } = props;

  const { previous, playPause, next } = useMusicPlayer({
    songs,
    ref,
    setCurrentSongIndex,
    currentSongIndex,
    isPLaying,
    setIsPlaying,
  });
  return (
    <div>
      {songs && (
        <audio
          ref={ref}
          src={
            Array.isArray(songs)
              ? songs[currentSongIndex]?.preview
              : songs?.preview
          }
          onEnded={next}
          preload=''></audio>
      )}
      <div className='flex justify-center -mt-5 md:mt-0'>
        <button onClick={previous}>
          <FontAwesomeIcon
            icon={faBackwardStep}
            className='rounded-full p-1 mt-5 text-white cursor-pointer hover:scale-110 hover:saturate-150 w-7 h-7 mr-5 z-10'
          />
        </button>
        <span className='bg-[#FF7676] rounded-full h-12 w-12 flex justify-center mt-5'>
          <button onClick={playPause}>
            {isPLaying ? (
              <FontAwesomeIcon
                icon={faPause}
                className='rounded-full text-white cursor-pointer hover:scale-110 hover:saturate-150 w-7 h-7 z-10'
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlay}
                className='rounded-full ml-1 text-white cursor-pointer hover:scale-110 hover:saturate-150 w-7 h-7 z-10'
              />
            )}
          </button>
        </span>
        <button onClick={next}>
          <FontAwesomeIcon
            icon={faForwardStep}
            className='rounded-full p-1 text-white cursor-pointer hover:scale-150 hover:saturate-150 w-7 h-7 ml-5 mt-5 z-10'
          />
        </button>
      </div>
    </div>
  );
});

export default MusicPlayerControls;
