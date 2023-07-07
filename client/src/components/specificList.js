import classes from './specificList.module.css';
import {Link} from 'react-router-dom';


function SpecificList({workouts}){

return ( 
    <>
    <h1>Select the specific workouts that you want to add</h1>
    <div className={classes.events}>
    <ul className={classes.list}>
      {workouts.map((event) => (
        <li key={event.id} className={classes.item}>
          <Link to={`/details/${event.id}`}>
            
          <img src={event.image} alt={event.name} />
            <div className={classes.content}>
              <h2>{event.name}</h2>
            </div>

          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>
)
      }

export default SpecificList;