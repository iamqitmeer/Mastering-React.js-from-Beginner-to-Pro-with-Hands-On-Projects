import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = 'https://api.github.com/users/';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('githubSearchHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(apiUrl + username);
      const data = response.data;
      setProfile(data);
      saveSearchHistory(data.login);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const saveSearchHistory = (username) => {
    const newHistory = [username, ...history.slice(0, 4)];
    setHistory(newHistory);
    localStorage.setItem('githubSearchHistory', JSON.stringify(newHistory));
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className='App-h1 mb-8'>
        <h1 className="text-4xl font-bold">Welcome to GitHub Profile Search</h1>
      </div>
      <div className="flex items-center">
        <input
          className='bg-white border border-gray-300 rounded-full py-2 px-4 outline-none focus:border-blue-500'
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-full ml-4 px-6 py-2 hover:bg-blue-600"
          onClick={fetchProfile}
        >
          Search
        </button>
      </div>
      <br />
      {profile && (
        <div className="profile-container mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
          <img
            className='img-user bg-center rounded-full border-4 border-white'
            src={profile.avatar_url}
            alt="Avatar"
            width='50'
          />
          <div className='mt-4'>
            <p className='text-gray-700'>{profile.bio}</p>
          </div>
          <p className='text-gray-800 mt-2'>Followers: {profile.followers}</p>
          <p className='text-gray-800'>Following: {profile.following}</p>
        </div>
      )}
      <br />
    </div>
  );
}

export default App;
