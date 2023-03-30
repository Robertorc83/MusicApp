import React from "react";
import ArtistThumbnail from "../ArtistThumbnail/ArtistThumbnail";
import { Song } from "../../../interfaces";

type ArtistsListProps = {
  data: Song[];
  handlePlayClick: (index: number) => void;
  isPLaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentSongIndex: number;
};

function ArtistsList({
  data,
  handlePlayClick,
  isPLaying,
  setIsPlaying,
  currentSongIndex,
}: ArtistsListProps) {
  return (
    <div className='overflow-y mt-16 lg:-mt-14 '>
      <h3 className='mt-2 text-main font-bold text-lg text-center xs:text-start'>
        Resultados
      </h3>
      <div className='grid xs:grid-cols-3 lg:grid-cols-5 gap-x-10 lg:gap-x-20 2xl:gap-x-40 gap-y-4 mt-2 justify-items-center lg:justify-items-start pb-10 md:pb-0'>
        {data.slice(0, 10).map((song, index) => (
          <ArtistThumbnail
            image={song.album.cover_xl}
            songName={song.title}
            artist={song.artist.name}
            handlePlayClick={handlePlayClick}
            key={song.id}
            index={index}
            isPLaying={isPLaying}
            setIsPlaying={setIsPlaying}
            currentSongIndex={currentSongIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtistsList;
