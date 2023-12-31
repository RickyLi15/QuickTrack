import classes from './workoutList.module.css';
import {Link} from 'react-router-dom';


function WorkoutList({workouts}){

return ( 
    <>
    <h1>Select the options from which you want to add to your workout routine</h1>
    <div className={classes.events}>
    <h1>All Workouts</h1>
    <ul className={classes.list}>
      {workouts.map((event) => (
        <li key={event.id} className={classes.item}>
          <Link to={`/workout/${event.id}`}>
            
            <img src={event.image} alt={event.title} />
            <div className={classes.content}>
              <h2>{event.title}</h2>
            </div>

          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>
)
      }

export default WorkoutList;