//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Search from './Search';
import Filter from './Filter';

export default function App() {
  return (
    <>
      <div className='searchFilter'>
      <Search/>
      <Filter value1="Vacantes recomendadas" value2="Todas las vacantes"/></div>
      <Footer/>
      </>
  )
}


