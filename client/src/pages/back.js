import {useLoaderData, json, useRouteLoaderData,} from 'react-router-dom';
import SpecificList from '../components/specificList';

function BackPage() {

    const data = useRouteLoaderData('specific');
    return (
        <SpecificList workouts={data}/>
        

    )
    



}



export default BackPage;


