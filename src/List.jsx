import React, { useEffect } from 'react'
import Card from './Card'
import "./List.css"

function List() {
  let url = "https://randomuser.me/api/"
  
 /*  useEffect(_ => getData(url),[])
  async function getData(url){
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
  } */
  return (
    <main>
      <Card type="person" title="Andres Gonzalez" description="Edad: 22" />
      <Card type="bussines" title="Andres Gonzalez" description="Edad: 22"/>
    </main>
  )
}

export default List