import React from 'react'

function CardDash({title, img}) {
    return (
        <div className='vacancies_apply photo' style={{backgroundImage: img}}>
            {/* <img src="./img/dash1.jpg" alt="Imagen de la primera tarjeta" /> */}
            <h2 className='vacancies_title'>{title}</h2>
        </div>
    )
}

export default CardDash