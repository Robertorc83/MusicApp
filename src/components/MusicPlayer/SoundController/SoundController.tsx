import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SoundControllerProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const SoundController = React.forwardRef<
  HTMLMediaElement,
  SoundControllerProps
>((props, ref) => {
  const { volume, setVolume } = props;

  const changeVolume = (event: { target: { value: any } }) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (
      ref &&
      ref instanceof Object &&
      "current" in ref &&
      ref.current !== null
    ) {
      ref.current.volume = newVolume;
    }
  };

  return (
    <div className='flex justify-end px-20 items-center my-5 md:mt-0 '>
      <input
        type='range'
        min='0'
        max='1'
        step='0.01'
        value={volume}
        onChange={changeVolume}
        className=' h-2 bg-white rounded-lg appearance-none cursor-pointer accent-white'
      />
      <FontAwesomeIcon
        icon={faVolumeOff}
        className='rounded-full text-white cursor-pointer hover:scale-150 hover:saturate-150 w-6 h-6 z-10'
      />
    </div>
  );
});

export default SoundController;
