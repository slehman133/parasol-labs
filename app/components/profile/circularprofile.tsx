import React from 'react';
import './ProfilePicture.css';

interface ProfilePictureProps {
  imageUrl: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl }) => {
  return (
    <>
      <div className="profilePicture mx-auto">
        <img src={imageUrl} alt="Profile" className="image" />
      </div>
    </>

  );
};

export default ProfilePicture;