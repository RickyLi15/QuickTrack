

import Card from '../UI/Card';
import classes from './plan.module.css';
import WorkoutItem from '../components/workoutItem';
import {useSelector} from 'react-redux';

const PlanPage = (props) => {
  const cartItems = useSelector(state => state.planner.workouts);

  return (
    <Card className={classes.workout}>
      <h2>Your Workout Plan</h2>
      <ul>
        {cartItems.map((item) => (
          <WorkoutItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              sets: item.sets,
              reps: item.reps,
              calorie: item.calories,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default PlanPage;