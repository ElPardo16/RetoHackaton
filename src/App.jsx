import {useState, useEffect} from 'react'
import './App.css';
import List from './List';
import Dashborad from './Dashborad';

export default function App() {
  let dashPerson = <Dashborad user="person" fun={() => {setComponetRender(<List user="person"/>)}}/>
  let dashCompany = <Dashborad user="company" fun={() => {setComponetRender(<List user="company"/>)}}/>
  const [componetRender, setComponetRender] = useState()
  useEffect(_ => {
    setComponetRender(dashPerson)
    //setComponetRender(<List user="person"/>)
  },[])
  return (
      <>
      {componetRender}
      </>
  )
}

