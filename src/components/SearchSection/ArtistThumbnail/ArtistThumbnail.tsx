import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ArtistThumbnailProps {
  image: string;
  songName: string;
  artist: string;
  handlePlayClick: (index: number) => void;
  index: number;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPLaying: boolean;
  currentSongIndex: number;
}

function ArtistThumbnail({
  image,
  songName,
  artist,
  handlePlayClick,
  index,
  isPLaying,
  setIsPlaying,
  currentSongIndex,
}: ArtistThumbnailProps) {
  function handleOnClick(index: number) {
    handlePlayClick(index);
    setIsPlaying((previous) => !previous);
  }
  return (
    <div className='group'>
      <div className='grid relative group-hover:scale-105'>
        <img
          src={image}
          alt=''
          width='180'
          height='180'
          className='max-w-full h-auto'
        />
        <button
          onClick={() => handleOnClick(index)}
          className='absolute inset-0 flex items-center justify-center'>
          {currentSongIndex === index && isPLaying ? (
            <FontAwesomeIcon
              icon={faPause}
              className='rounded-full p-1 text-white cursor-pointer hover:scale-110 hover:saturate-150 w-8 h-8 -mt-20 lg:w-12 lg:h-12 lg:-mt-16 xl:w-20 xl:h-20 xl:-mt-10'
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className='rounded-full p-1 text-white cursor-pointer hover:scale-110 hover:saturate-150 w-8 h-8 -mt-20 lg:w-12 lg:h-12 lg:-mt-16 xl:w-20 xl:h-20 xl:-mt-10'
            />
          )}
        </button>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className='rounded-full p-1 text-white cursor-pointer hover:scale-110 hover:saturate-150 absolute w-6 h-6 mt-2 -right-1'
        />
        <p className='font-bold text-sm break-words mt-1'>{songName}</p>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default ArtistThumbnail;
