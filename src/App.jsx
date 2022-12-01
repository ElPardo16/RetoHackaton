import {useState, useEffect} from 'react'
import './App.css';
import List from './List';
import Dashborad from './Dashborad';
import Header from './Header'
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
      {componetRender}
      </>
  )
}

