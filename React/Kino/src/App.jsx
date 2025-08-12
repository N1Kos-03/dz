import './App.css'
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const lastUser = savedProfiles[savedProfiles.length - 1] || null;
    setCurrentUser(lastUser);
  }, []);

  const handleLogin = (name) => {
    const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const newProfile = { name };
    profiles.push(newProfile);
    localStorage.setItem('profiles', JSON.stringify(profiles));
    setCurrentUser(newProfile);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <Header user={currentUser} onLogout={handleLogout} />
      <Search onSearch={(query) => console.log("Поисковый запрос:", query)} />
      <Card />
      {!currentUser && <Login onLogin={handleLogin} />}
    </>
  )
}

export default App;


