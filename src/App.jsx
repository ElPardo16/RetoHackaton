import {useState, useEffect} from 'react'
import './App.css';
import List from './List';

export default function App() {
  const [componetRender, setComponetRender] = useState()
  useEffect(_ => {
    setComponetRender(<List user="person"/>)
  },[])
  return (
      <>
      <button onClick={() => {setComponetRender(<List user="bussines"/>)}}>asdsa</button>
      {componetRender}
      </>
     
  )
}


