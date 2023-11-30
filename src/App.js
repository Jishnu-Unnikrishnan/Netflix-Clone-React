import './App.css';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <header className='App'>
        <Navbar></Navbar>

      </header>

      {/* Banner */}
      <Banner></Banner>
      {/* first row trending */}
      <Row title="Trending in india"
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TopRated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row title="Action"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
