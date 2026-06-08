import './card.css'
import { Bookmark } from 'lucide-react'
const card = (props) => {
  return (
     <div className='card-container'>
      <div className='card'>
          <div className='top'>
            <img src={props.img}/>
           <button>save <Bookmark size={12}  /></button>
          </div>
          <div className='center'>
            <h3>{props.company}<span> {props.time}</span></h3>
            <h2>{props.role}</h2>
            <div className='tag'>
              <h4>{props.type}</h4>
              <h4>{props.level}</h4>
            </div>
              
          </div>
          <div className='bottom'>
              <div>
                <h3>{props.salary}</h3>
                <p>{props.location}</p>
              </div>
            <div>
              <button>Apply Now</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default card
