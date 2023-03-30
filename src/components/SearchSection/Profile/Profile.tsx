import React from "react";

function Profile() {
  return (
    <div className='px-10 py-4 flex justify-end items-center'>
      <img
        src='/profile-icon.png'
        alt=''
        width='18'
        height='16'
        className='inline-block '
      />
      <span className='ml-3 '>Francisco M.</span>
    </div>
  );
}

export default Profile;
