import logo from './logo.svg';
import './App.css';
import FilmsPresentation from './components/FilmsPresentation';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navigation/>

    <Routes>
      <Route path='/film/:id' element={<Detail/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
