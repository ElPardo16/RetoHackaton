import './Dashboard.css'
import {COMPANIES_USER} from './Companies_User'
import {COMPANIES} from './Companies'

function Dashborad({user}) {
  let type = 'person'
  if(type == 'person'){
    return (
      <div className='container_dash'>
        <h1 className='dash_title'>dashboard</h1>
        <div className='vacancies_apply photo'>
          {/* <img src="./img/dash1.jpg" alt="Imagen de la primera tarjeta" /> */}
          <h2 className='vacancies_title'>aplicar vacantes</h2>
        </div>
        <div className='vacancies_apply photo'>
          {/* <img src="./img/dash2.jpg" alt="Imagen de la segunda tarjeta" /> */}
          <h2 className='vacancies_title'>editar mi hoja de perfil</h2>
        </div>
        <div className='vacancies_apply photo'>
          {/* <img src="./img/dash3.jpg" alt="Imagen de la tercera tarjeta" /> */}
          <h2 className='vacancies_title'>certificar habilidades</h2>
        </div>
      </div>
    )
  }else if (type == 'company'){
    return (
      <div className='container_dash'>
        <h1 className='dash_title'>dashboard</h1>
        <div className='vacancies_apply photo'>
          {/* <img src="./img/dash1.jpg" alt="Imagen de la primera tarjeta" /> */}
          <h2 className='vacancies_title'>publicar vacantes</h2>
        </div>
        <div className='vacancies_apply photo'>
          {/* <img src="./img/dash2.jpg" alt="Imagen de la segunda tarjeta" /> */}
          <h2 className='vacancies_title'>ver aspirantes</h2>
        </div>
        <div className='vacancies_apply photo'>
          {/* <img src="./img/dash4.jpg" alt="Imagen de la tercera tarjeta" /> */}
          <h2 className='vacancies_title'>pruebas técnicas</h2>
        </div>
      </div>
    )
  }

}

export default Dashborad