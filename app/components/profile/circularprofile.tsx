import React from 'react';
import './ProfilePicture.css';
import { Link } from '@nextui-org/react';

interface ProfilePictureProps {
  imageUrl: string;
  linkedinUrl: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl, linkedinUrl },) => {
  return (
    <>
      <div className="profilePicture mx-auto mt-0">
        <Link href={linkedinUrl} isExternal>
          <img src={imageUrl} alt="Profile" className="image" />
        </Link>
      </div>
    </>
  );
};

export default ProfilePicture;