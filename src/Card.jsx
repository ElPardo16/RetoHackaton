import "./Card.css"

function Card({type,title,description,img}) {
    function randomSkill(){
        let number = Math.floor(Math.random() * 3)
        switch(number){
            case 0:
                return ["./img/lreact.png","./img/lnode.png","./img/laws.png"]
            case 1:
                return ["./img/lphp.png","./img/lsql.png"]
            case 2:
                return ["./img/langular.png","./img/lmongo.png"]
        }
    }
    if(type == "person"){
        return ( 
        <div className='card'>
            <img src={img} alt="Imagen de perfil"/>
            <div className="card_con">
                <p className="n">{title}</p>
                <p>Edad: {description}</p>
                <p className="n">Habilidades:</p>
                <div className="skills">{randomSkill().map((item, index) =>{
                    return <img key={index} src={item} alt="icono" />
                })}</div>
            </div>
        </div>
        )
    }else{
        return (
        <div className='card'>
            <img src={img} alt="Imagen de perfil" />
            <div className="card_con">
                <p className="n">{title}</p>
                <p className="des">{description}</p>
                <p className="n">Habilidades:</p>
                <div className="skills">
                {randomSkill().map((item, index) =>{
                    return <img key={index} src={item} alt="icono" />
                })}
                </div>
            </div>
        </div>
        )
    }
}

export default Card