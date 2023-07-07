import WorkoutForm from '../components/WorkoutForm';
import {json, useRouteLoaderData} from 'react-router-dom';

function WorkoutDetailPage() {

    const data = useRouteLoaderData('workout-detail');

    return (
        <WorkoutForm event={data}></WorkoutForm>
    )

    



}


export async function loader({requenst, params}) {
    const id = params.sid;

    const response = await fetch('/details/' + id);
    console.log(id);

    if(!response.ok){
        console.log('What');

        throw json({message: 'Could not fetch workouts.'}, {
            status: 500
          });
    }else{
        return response;
    }
}

export default WorkoutDetailPage;