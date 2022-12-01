import React, {useState, useEffect } from 'react'
import Card from './Card'
import "./List.css"
import {bussines} from './bussines'

function List({user}) {
  let url = "https://randomuser.me/api/?results=10"
  const [people, setPeople] = useState()
  async function getData(url){
    const response = await fetch(url)
    const json = await response.json()
    setPeople(json.results)
  }
  useEffect(_ => {getData(url)},[])
  if(user == "person"){
    return (
      <main>
        {!people ? "Cargando..." : 
        people.map(({name: {first, last}, picture: {large}, registered: {age}},index) =>{
          return <Card key={index} type="person" title={`${first} ${last}`} description={age} img={large} />
        })}
      </main>
    )
  }else{
    return (
      <main>
        {bussines.map(({name, des, img},index) =>{
          return <Card key={index} type="bussines" title={name} description={des} img={img} />
        })}
      </main>
    )
  }
}

export default List