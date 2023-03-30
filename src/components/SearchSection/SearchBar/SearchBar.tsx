import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setQuery }: Props) {
  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setQuery(event.target.value);
  }
  return (
    <div className='relative px-10 py-4 w-full flex items-center'>
      <input
        type='text'
        placeholder='Buscar'
        className='px-2 border-gray-400 border-2 w-full h-10 rounded-2xl'
        onChange={handleChange}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='rounded-full p-1 text-gray-500 cursor-pointer hover:scale-110 hover:saturate-150 absolute w-5 h-5 right-14'
      />
    </div>
  );
}

export default SearchBar;
