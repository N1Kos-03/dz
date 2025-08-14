import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import { UserContextProvider, UserContext } from './context/user.context';
import { useContext } from 'react';

function AppContent() {
  const { userName, logout } = useContext(UserContext);

  return (
    <>
      <Header user={userName} onLogout={logout} />
      <Search onSearch={(query) => console.log("Поисковый запрос:", query)} />
      <Card />
      {!userName && <Login />}
    </>
  );
}

function App() {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  );
}

export default App;

