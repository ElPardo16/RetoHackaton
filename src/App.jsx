import {useState, useEffect} from 'react'
import './App.css';
import List from './List';
import Dashborad from './Dashborad';
import Header from './Header'
import Footer from './Footer';
import Search from './Search';
import Filter from './Filter';
export default function App() {
  let dashPerson = <>
                    <Header img="./img/perfil.jpg"/>
                    <Dashborad user="person" fun={() => {setComponetRender(listPerson)}}/>
                    <Footer/></>
  let dashCompany = <>
                      <Header img="./img/lpercient.jpg"/>
                      <Dashborad user="company" fun={() => {setComponetRender(listCompany)}}/>
                      <Footer/></>
  let listPerson = <>
                    <Header img="./img/perfil.jpg"/>
                    <div className='searchFilter'>
                        <Search/>
                        <Filter value1="Vacantes recomendadas" value2="Todas las vacantes"/>
                    </div>
                    <List user="person"/>
                    <Footer/></>
  let listCompany = <>
                      <Header img="./img/lpercient.jpg"/>
                      <div className='searchFilter'>
                        <Search/>
                        <Filter value1="Vacantes recomendadas" value2="Todas las vacantes"/>
                      </div>
                      <List user="company"/>
                      <Footer/></>
  const [componetRender, setComponetRender] = useState()
  useEffect(_ => {
    setComponetRender(dashPerson)
    //setComponetRender(<List user="person"/>)
  },[])
  return (
    <div className='app-root'>
      {componetRender}
    </div>
  )
}

