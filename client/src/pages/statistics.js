import { useSelector } from "react-redux";
import { useState } from "react";
import "./statistics.css"
import Transition from 'react-transition-group/Transition'
import QA from '../images/qa-logo-clipart-4.jpeg';


function StatisticsPage() {
    const totalCalories = useSelector(state => state.planner.totalCaloriesBurned);

    const [isOpen, setIsOpen] = useState(false);

    

   
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

        <button className = 'button' onClick={() => setIsOpen(!isOpen)}> What is this Page?</button>
        <br/>
        <Transition in = {isOpen} timeout={500}
          mountOnEnter 
          unmountOnExit>
            {
                state => (
                    <div style={{backgroundColor: 'dark-gray',
                  margin: 'auto',
                  height: 400,
                  width: 1000,
                  transition: 'opacity 1s ease-out',
                  opacity: state === 'entering' ? 1 : state === 'entered' ? 1 : 0}}>
                        <img style={{
                    height: 200,
                    width: 300,

                   }}src={QA} alt='q&a'></img>
                    <h4> Through this page, you can view your workout statistics overall.
                    You can check to see how many calories you have burned (Which is an approximation),
                    as well as the total number of sets of workouts that you have completed. These are separated
                    into categories of arm, leg, core, or back workouts.
                  </h4>
               
            
                    </div>

                )
            }



        </Transition>

       

        </>
        
    );

    };


export default StatisticsPage;