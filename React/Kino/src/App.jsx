import './App.css'
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Header />
      <Search onSearch={(query) => {
        console.log("Поисковый запрос:", query);
      }} />
      <Card />
    </>
  )
}

export default App

