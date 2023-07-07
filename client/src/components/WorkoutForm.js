import {Form, useNavigation, useActionData, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {plannerActions} from '../store/planner-slice';
import classes from './WorkoutForm.module.css'
import { useState } from 'react';

function WorkoutForm ({method, event}) {  
    const navigate = useNavigate();
    const [reps, setReps] = useState(0);
    const [sets, setSets] = useState(0);

    const dispatch = useDispatch();


    const addtoWorkoutHandler = async () => {

      let randId = Math.floor(Math.random()*10000);

      const response = await fetch('/insertWorkout',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          id: randId,
          reps: reps,
          sets: sets,
          calories: event.calories,
          name: event.name

        })
       

      }
     
      );


      dispatch(plannerActions.addWorkoutToPlan({
        id: randId,
        reps: reps,
        sets: sets,
        calories: event.calories,
        name: event.name


     

      }
      ))
  

    }


  const handleReps = event => {
    setReps(event.target.value);
  }

  const handleSets = event => {
    setSets(event.target.value)
  }

function cancelHandler() {
    navigate('..');
}

const isSubmitting = false;

return (

    <Form method={method} className={classes.form}>
        <p>
        {event.description}
      </p>

      <p>
        {`Calories burned per rep(approximate): ${parseFloat(event.calories)}`}
      </p>

   
      <p>
      <img src={event.image} alt={event.title} style={{width: "500px", height:"285px"}}/>
      </p>

      <p>
        <label htmlFor="sets">Sets</label>
        <input id="sets" type="number" name="sets"  value ={sets} onChange={handleSets} required />
      </p>


      <p>
        <label htmlFor="reps">Reps</label>
        <input id="reps" type="number" name="reps" value ={reps} onChange={handleReps} required />
      </p>
      
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting} onClick = {addtoWorkoutHandler}>{isSubmitting ? 'Submitting...' : 'Add to Workout'}</button>
      </div>


    </Form>





)

}


export default WorkoutForm;