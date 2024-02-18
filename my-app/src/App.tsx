import './App.css';
import { Main } from './components/Main';
import { NewCollection } from './components/NewCollection';
import { NewsOfSeasons } from './components/NewsOfSeasons';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header/>
      <Main/>
      <NewCollection/>
      <NewsOfSeasons/>
      <Footer/>
    </>
  );
}

export default App;
