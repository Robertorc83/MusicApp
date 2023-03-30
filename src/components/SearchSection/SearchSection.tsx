import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Profile from "./Profile/Profile";
import useAxios from "../../hooks/useAxios/useAxios";
import ArtistsList from "./ArtistsList/ArtistsList";
import FeaturedArtist from "./FeaturedArtist/FeaturedArtist";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

type SearchSectionProps = {
  width: string;
};

function SearchSection({ width }: SearchSectionProps) {
  const { data, error, loading, setQuery } = useAxios();
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPLaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayClick = (index: number) => {
    setCurrentSongIndex(index);
  };
  return (
    <div className={`grid justify-items-center ${width}`}>
      <div className='grid sm:grid-cols-2 w-full mt-8 lg:-mt-14'>
        <SearchBar setQuery={setQuery} />
        <Profile />
      </div>
      <FeaturedArtist />
      {error && (
        <p className='text-center text-main mt-10'>
          Ocurrió un error intenta nuevamente
        </p>
      )}
      {loading && <p className='text-center text-main mt-10'>Loading...</p>}
      {data && (
        <div>
          <div className='w-full px-10'>
            <ArtistsList
              data={data}
              isPLaying={isPLaying}
              handlePlayClick={handlePlayClick}
              setIsPlaying={setIsPlaying}
              currentSongIndex={currentSongIndex}
            />
          </div>
          <div>
            <MusicPlayer
              songs={data}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              isPLaying={isPLaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
