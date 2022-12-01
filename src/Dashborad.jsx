import React from 'react'
import Card from './Card'
function Dashborad() {
  let arr = [<Card type="person" title="Andres Gonzalez" description="Edad: 22" />,<Card type="person" title="Andres Gonzalez" description="Edad: 22" />]
  return (
    <div>
      <Card type="person" title="Andres Gonzalez" description="Edad: 22" />
    </div>
  )
}

export default Dashborad