import { useEffect } from "react";
import { Song } from "../../interfaces";

type UseMusicPlayerProps = {
  songs?: Song[] | Song;
  ref: React.ForwardedRef<HTMLMediaElement>;
  isPLaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const useMusicPlayer = ({
  songs,
  ref,
  isPLaying,
  setIsPlaying,
  currentSongIndex,
  setCurrentSongIndex,
}: UseMusicPlayerProps) => {
  const playPause = () => {
    if (ref && ref instanceof Object && "current" in ref) {
      if (!isPLaying) {
        ref.current?.play();
        setIsPlaying((previous) => !previous);
      } else {
        ref.current?.pause();
        setIsPlaying((previous) => !previous);
      }
    }
  };

  const next = () => {
    if (!songs || !Array.isArray(songs)) return;
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const previous = () => {
    if (!songs || !Array.isArray(songs)) return;
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  useEffect(() => {
    if (isPLaying && ref && ref instanceof Object && "current" in ref) {
      ref.current?.play();
    } else if (ref && ref instanceof Object && "current" in ref)
      ref.current?.pause();
  }, [currentSongIndex, isPLaying, ref]);

  return {
    playPause,
    next,
    previous,
  };
};
