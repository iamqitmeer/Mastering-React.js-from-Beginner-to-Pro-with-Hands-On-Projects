// import "./App.css";
// import Main from "./Component/Main";
// // import Router from "./Config/Router";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Router /> */}
//         <Main />
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import SearchForm from './Component/SearchForm';
import UserProfile from './Component/UserProfile';
import SearchHistory from './Component/SearchHistory';

const App = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = (profile) => {
    setUserProfile(profile);
    setSearchHistory([...searchHistory, profile]);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={handleSearch} />
      {userProfile && <UserProfile profile={userProfile} />}
      {searchHistory.length > 0 && <SearchHistory history={searchHistory} />}
    </div>
  );
};

export default App;
