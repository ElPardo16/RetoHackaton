import './Dashboard.css'
import {COMPANIES} from './Companies'
import {COMPANIES_USER} from './Companies_User'
import CardDash from './CardDash'
function Dashborad({user}) {
  if(user == 'person'){
    return (
      <div className='container_dash'>
        <h1 className='dash_title'>dashboard</h1>
        {COMPANIES_USER.map(({title, img}, index) => {
          return <CardDash title={title} img={img}/>
        })}
      </div>
    )
  }else{
    return (
      <div className='container_dash'>
        <h1 className='dash_title'>dashboard</h1>
        {COMPANIES.map(({title, img}, index) => {
          return <CardDash title={title} img={img}/>
        })}
      </div>
    )
  }

}

export default Dashborad