// SearchHistory.js
import React from 'react';

const SearchHistory = ({ history }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold">Search History</h2>
      <ul>
        {history.map((profile) => (
          <li key={profile.id} className="mb-2">
            {profile.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
