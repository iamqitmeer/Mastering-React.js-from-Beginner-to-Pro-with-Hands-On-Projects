// // SearchForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import axios from '../../node_modules/axios';  // Use a relative import path

// const SearchForm = ({ onSearch }) => {
//   const [username, setUsername] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`https://api.github.com/users/${username}`);
//       onSearch(response.data);
//     } catch (error) {
//       console.error('Error fetching user profile:', error.message);
//     }
//   };

//   return (
//     <form className="my-4" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter GitHub username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="border p-2 mr-2"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchForm;
// SearchForm.js
import React, { useState } from 'react';
import axios from 'axios';  // Import axios once

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
