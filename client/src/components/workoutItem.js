import classes from './workoutItem.module.css';
import { useDispatch } from 'react-redux';
import {plannerActions} from '../store/planner-slice';
import { useState } from 'react';



const WorkoutItem = (props) => {

  const dispatch = useDispatch();


  const { title, sets, reps, calorie,id } = props.item;
  // const dispatch = useDispatch();

  const removeWorkoutHandler = async () => {

    const response = await fetch('/deleteWorkout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        id: id,
        reps: reps,
        sets: sets,
        calories: calorie,
        name: title

      })
     

    })

     dispatch(plannerActions.removeWorkoutFromPlan(id));

  }
  const addItemHandler = () => {
    /* dispatch(cartActions.addItemToCart({
      id,
      price,
      title}
    ))  */

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {`${reps} reps per set`}{' '}
       
          
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{`${sets} sets (${calorie}cal/rep)`}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeWorkoutHandler}>Complete</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default WorkoutItem;