// UserProfile.js
import React from 'react';

const UserProfile = ({ profile }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold">{profile.login}</h2>
      <img
        src={profile.avatar_url}
        alt={`${profile.login}'s avatar`}
        className="rounded-full my-2"
      />
      <p>{profile.bio}</p>
    </div>
  );
};

export default UserProfile;
