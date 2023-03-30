import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function FeaturedArtist() {
  return (
    <div className='sm:grid sm:grid-cols-4 lg:grid-cols-7 px-2 2xs:px-4 xs:px-10 w-full mt-10 lg:h-48 lg:-mt-10'>
      <div className='col-span-1 relative sm:aspect-w-3 sm:aspect-h-4'>
        <img src='/adele.png' alt='' className='w-full h-full object-cover' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <FontAwesomeIcon
            icon={faPlay}
            className='rounded-full p-1 text-white cursor-pointer hover:scale-110 hover:saturate-150 w-12 h-12 -mt-16 xl:w-20 xl:h-20 z-10 xl:-mt-10'
          />
        </div>
      </div>
      <div className='relative col-span-3 lg:col-span-6 w-full h-[520px] 2xs:h-[480px] xs:h-[380px] sm:h-80 lg:h-60'>
        <div
          className='absolute inset-0'
          style={{
            background: `linear-gradient(0deg, rgba(157, 100, 0, 0.7))`,
            opacity: "0.5",
          }}></div>
        <img
          className='w-full h-full object-cover'
          src='/adele-wallpaper.png'
          alt='Background'
        />
        <div className='absolute inset-0 flex flex-col items-start mt-6 px-6'>
          <h4 className='text-white font-bold text-xl'>Adele 21</h4>
          <p className='text-sm text-white'>
            Lo mejor de Adele{" "}
            <span className='ml-2 text-[#662323]'>321, 123 seguidores</span>
          </p>
          <p className='text-white text-sm pr-20 mt-6'>
            Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo
            de 1988), conocida simplemente como Adele, es una cantante,
            compositora y multinstrumentista británica.8​
          </p>
          <div className='flex flex-col sm:flex-row sm:space-x-4 mt-12'>
            <button className='bg-main text-white w-36 py-1 rounded-2xl block sm:inline hover:scale-110'>
              Reproducir
            </button>
            <button className='bg-transparent border-secondary border-2 text-secondary w-36 py-1 rounded-2xl block sm:inline mt-5 sm:mt-0 hover:scale-110'>
              Seguir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArtist;
