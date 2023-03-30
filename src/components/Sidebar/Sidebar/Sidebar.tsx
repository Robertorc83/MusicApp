import { useState } from "react";
import { libreriaData } from "../../../data/libreriaData";
import { playlists } from "../../../data/playlist";
import Linkslist from "../Linkslist/Linkslist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <aside className='bg-dark-red text-center lg:text-start lg:h-screen px-8 py-8 group'>
      <img
        src='/foxbel-music.png'
        alt='foxbel logo'
        className=' mx-auto max-w-full h-auto'
      />
      <div>
        <h4 className='text-white font-bold text-lg mt-8'>Mi Librería</h4>
        <div className='relative'>
          <p className='text-main font-bold before:content-[""] before:absolute before:-left-10 before:top-[50%] before:-translate-y-1/2 before:w-5 before:h-5 before:bg-main'>
            Recientes
          </p>
        </div>
        <p
          className={`block lg:hidden ${
            toggle ? "hidden" : "block"
          } transition duration-300`}>
          <FontAwesomeIcon
            onClick={() => setToggle(true)}
            icon={faChevronDown}
            className='rounded-full p-1 text-white cursor-pointer hover:scale-150 hover:saturate-150 w-6 h-6 mt-2 z-10'
          />
        </p>
        <div
          className={`lg:block ${
            toggle ? "block" : "hidden"
          } transition duration-300`}>
          <Linkslist data={libreriaData} />
        </div>
      </div>
      <div
        className={`lg:block ${
          toggle ? "block" : "hidden"
        } transition duration-300`}>
        <h4 className='text-white font-bold text-lg mt-8'>Playlists</h4>
        <Linkslist data={playlists} />
        <p
          className={`lg:hidden ${
            toggle ? "block" : "hidden"
          } transition duration-300`}>
          <FontAwesomeIcon
            onClick={() => setToggle(false)}
            icon={faChevronUp}
            className='rounded-full p-1 text-white cursor-pointer hover:scale-150 hover:saturate-150 w-6 h-6 mt-2 z-10'
          />
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
