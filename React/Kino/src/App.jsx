import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Card from './components/Card/Card';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(savedProfiles);
    const activeUser = savedProfiles.find(p => p.isLogined);
    if (activeUser) {
      setCurrentUser(activeUser);
    }
  }, []);

  const handleLogin = (name) => {
    let updatedProfiles = [...profiles];
    const existingProfileIndex = updatedProfiles.findIndex(p => p.name === name);

    if (existingProfileIndex !== -1) {
      updatedProfiles = updatedProfiles.map((p, index) => ({
        ...p,
        isLogined: index === existingProfileIndex
      }));
      setCurrentUser(updatedProfiles[existingProfileIndex]);
    } else {
      const newProfile = { name, isLogined: true };
      updatedProfiles = [...profiles, newProfile];
      setCurrentUser(newProfile);
    }

    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const handleLogout = () => {
    if (!currentUser) return;

    const updatedProfiles = profiles.map(p =>
      p.name === currentUser.name ? { ...p, isLogined: false } : p
    );

    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    setCurrentUser(null);
  };

  return (
    <>
      <Header user={currentUser} onLogout={handleLogout} />
      <Search onSearch={(query) => console.log("Поисковый запрос:", query)} />
      <Card />
      {!currentUser && <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;
