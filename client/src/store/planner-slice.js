import {createSlice} from '@reduxjs/toolkit';



const plannerSlice = createSlice({
    name: 'planner',
    initialState: {
        workouts: [],
        totalQuantity: 0,
        totalCaloriesBurned: 0,
        changed: false


    },

    reducers: {

        addWorkoutToPlan(state, action) {
            const newWorkout = action.payload;
            state.totalQuantity++;
            state.workouts.push({
                id: newWorkout.id,
                sets: newWorkout.sets,
                reps: newWorkout.reps,
                calories: newWorkout.calories,
                name: newWorkout.name,
            })







        },

        replacePlan(state, action){
            state.workouts = action.payload.workouts
            state.totalCaloriesBurned = action.payload.caloriesBurned
            
        },


        removeWorkoutFromPlan(state, action){
            const id = action.payload;
            state.totalQuantity--;
            const existingWorkout =  state.workouts.find(workout => workout.id === id);
            if(existingWorkout){
                state.totalCaloriesBurned = state.totalCaloriesBurned + (existingWorkout.sets * existingWorkout.reps * existingWorkout.calories);
                
            }
           


            state.workouts = state.workouts.filter(workout => workout.id !== id);




        },

    },
})




export default plannerSlice;
export const plannerActions = plannerSlice.actions;