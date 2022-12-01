import './Dashboard.css'
import {COMPANIES} from './Companies'
import {COMPANIES_USER} from './Companies_User'
import CardDash from './CardDash'
function Dashborad({user,fun}) {
  if(user == 'person'){
    return (
      <div className='container_dash'>
        <h1 className='dash_title'>dashboard</h1>
        {COMPANIES_USER.map(({title, img}, index) => {
          return <CardDash key={index} title={title} img={img} fun={fun}/>
        })}
      </div>
    )
  }else{
    return (
      <div className='container_dash'>
        <h1 className='dash_title'>dashboard</h1>
        {COMPANIES.map(({title, img}, index) => {
          return <CardDash key={index} title={title} img={img} fun={fun}/>
        })}
      </div>
    )
  }

}

export default Dashborad