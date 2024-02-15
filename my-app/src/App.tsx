import './App.css';
import { Main } from './components/Main';
import { NewCollection } from './components/NewCollection';
import { NewsOfSeasons } from './components/NewsOfSeasons';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Main/>
      <NewCollection/>
      <NewsOfSeasons/>
      <Footer/>
    </>
  );
}

export default App;
