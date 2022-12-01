import React from 'react'

function CardDash({title, img, fun}) {
    return (
        <div className='vacancies_apply photo' style={{backgroundImage: img}} onClick={fun}>
            {/* <img src="./img/dash1.jpg" alt="Imagen de la primera tarjeta" /> */}
            <h2 className='vacancies_title'>{title}</h2>
        </div>
    )
}

export default CardDash