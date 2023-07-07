import {useLoaderData, json, useRouteLoaderData,} from 'react-router-dom';
import WorkoutList from '../components/workoutList';

function WorkoutPage() {
    const data = useRouteLoaderData('workout');

      

    return ( 
        <WorkoutList workouts={data}/>
       
    )
}

export default WorkoutPage;


export async function loader() {

    const response = await fetch('/workouts');

    if(!response.ok){

        throw json({message: 'Could not fetch workouts.'}, {
            status: 500
          });
    }else{
        return response;
    }
}