import { plannerActions} from "./planner-slice";


export const fetchWorkoutData = () => {
    return async dispatch => {
        const fetchData = async () => {
           const response = await fetch('/getData');

           if(!response.ok){
            throw new Error('Could not fetch workout data!');
           }

           const data = await response.json();
           console.log(data);

           return data;
        }

        try{
            const workoutData = await fetchData();
            let totalCalories = 0;
            if(workoutData){
                workoutData.forEach(
                    (work) => {
                        totalCalories += (work.calories * work.sets * work.reps);
                    }
                )
            }
           
            dispatch(plannerActions.replacePlan({
                workouts: workoutData || [],
                caloriesBurned: totalCalories,
            }));

        }catch(error) {
            console.log("something bad happened!");
        }


        };
    };


    export const addWorkoutData = ()  => {

    }
