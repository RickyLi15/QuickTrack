import {useLoaderData, json, useRouteLoaderData,} from 'react-router-dom';
import SpecificList from '../components/specificList';

function ArmPage() {

    const data = useRouteLoaderData('specific');
    return (
        <SpecificList workouts={data}/>
        

    )
    



}



export default ArmPage;


export async function loader({requenst, params}) {
    const id = params.wid;

    const response = await fetch('/workouts/' + id);

    if(!response.ok){

        throw json({message: 'Could not fetch workouts.'}, {
            status: 500
          });
    }else{
        return response;
    }
}