import "./Card.css"

function Card({type,title,description}) {

    if(type == "person"){
        return ( 
        <div className='card'>
            <img src="https://img2.freepng.es/20180713/ig/kisspng-user-profile-linkedin-netwerk-money-order-fulfillm-round-face-5b4944092212b3.5336384915315282011396.jpg" alt="Imagen de perfil"/>
            <div className="card_con">
                <p className="n">{title}</p>
                <p className="n">Edad: {description}</p>
                <p className="n">Habilidades:</p>
                <div className="skills"></div>
            </div>
        </div>
        )
    }else{
        return (
        <div className='card'>
            <img src="" alt="Imagen de perfil" />
            <div className="card_con">
                <p className="n">{title}</p>
                <p>{description}</p>
                <p className="n">Habilidades:</p>
                <div className="skills"></div>
            </div>
        </div>
        )
    }
}

export default Card