
import './App.css';
import Home from './views/Home';
import Header from  './components/Header/Header.jsx';
import {Routes, Route} from 'react-router-dom'
import MovieDetails from './views/MovieDetails.jsx'

function App() {

  return (
    <>
      <Header />
       <Routes>
         <Route path="/" element={< Home />} />
         <Route path="/movie/details/:id" element={<MovieDetails />} />
         <Route path="*" element={<Home />} />
       </Routes>  

    </>
  );
}

export default App
