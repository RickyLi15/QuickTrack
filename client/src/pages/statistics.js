import { useSelector } from "react-redux";


function StatisticsPage() {
    const totalCalories = useSelector(state => state.planner.totalCaloriesBurned);

    return (
        <>
        <h1>My workout stats</h1>


        <div style={{marginLeft: '5em'}}>
        <h3>{`Total Calories Burned: ${totalCalories.toFixed(2)}`}</h3>

         
        <h3>Total days you have worked out: {0}</h3>

        <h3>Total sets of core workouts performed: {0}</h3>


        <h3>Total sets of leg workouts performed: {0}</h3>


        <h3>Total sets of arm workouts performed: {0}</h3>


        <h3>Total sets of back workouts performed: {0}</h3>


        </div>

       

        </>
        
    )


}

export default StatisticsPage;