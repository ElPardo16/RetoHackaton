import {useState, useEffect} from 'react'
import './App.css';
import List from './List';
import Dashborad from './Dashborad';
import Header from './Header'
import Footer from './Footer';
import Search from './Search';
import Filter from './Filter';
export default function App() {
  let dashPerson = <><Header/><Dashborad user="person" fun={() => {setComponetRender(listPerson)}}/></>
  let dashCompany = <><Header/><Dashborad user="company" fun={() => {setComponetRender(listCompany)}}/></>
  let listPerson = <><Header/><List user="person"/></>
  let listCompany = <><Header/><List user="company"/></>
  const [componetRender, setComponetRender] = useState()
  useEffect(_ => {
    setComponetRender(dashCompany)
    //setComponetRender(<List user="person"/>)
  },[])
  return (
    <>
      <div className='searchFilter'>
      <Search/>
      <Filter value1="Vacantes recomendadas" value2="Todas las vacantes"/></div>
      <Footer/>
      </>
  )
}

