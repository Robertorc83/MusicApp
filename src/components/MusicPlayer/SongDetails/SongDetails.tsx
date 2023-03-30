import React from "react";
import { Song } from "../../../interfaces";

interface SongDetailsProps {
  songs?: Song[] | Song;
  currentSongIndex: number;
}

function SongDetails({ songs, currentSongIndex }: SongDetailsProps) {
  return (
    <div className='md:flex text-center md:text-start mt-5 md:mt-0'>
      <div>
        <img
          className='h-40 md:h-24 rounded-md md:rounded-none'
          src={
            songs && Array.isArray(songs)
              ? songs[currentSongIndex]?.album?.cover
              : songs?.album?.cover
          }
          alt=''
        />
      </div>
      <div>
        {" "}
        <div className='p-5'>
          {songs && Array.isArray(songs) ? (
            <h2 className='font-bold text-white'>
              {songs[currentSongIndex]?.title}
            </h2>
          ) : (
            <h2 className='font-bold text-white'>{songs?.title}</h2>
          )}
          {songs && Array.isArray(songs) ? (
            <h3 className='text-white text-sm mt-2'>
              {songs[currentSongIndex]?.artist?.name}
            </h3>
          ) : (
            <h3 className='text-white text-sm mt-2'>{songs?.artist?.name}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
