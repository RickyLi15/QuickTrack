import {useLoaderData, json, useRouteLoaderData,} from 'react-router-dom';
import SpecificList from '../components/specificList';

function CorePage() {

    const data = useRouteLoaderData('specific');
    return (
        <SpecificList workouts={data}/>
        

    )
    



}



export default CorePage;

