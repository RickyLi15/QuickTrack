import React, {useEffect, useState} from 'react';
import HomePage from './pages/homePage';
import {createBrowserRouter,createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import RootLayout from './pages/root';
import StatisticsPage from './pages/statistics';
import WorkoutPage, {loader as workoutLoader} from './pages/workout';
import PlanPage from './pages/plan';
import ArmPage, {loader as armLoader} from './pages/Arms';
import BackPage from './pages/back';
import CorePage from './pages/Core';
import LegPage from './pages/Legs';
import WorkLayout from './pages/work'
import WorkoutDetailPage, {loader as detailLoader} from './pages/workoutDetail'
import {useSelector, useDispatch} from 'react-redux';
import { fetchWorkoutData } from './store/plan-actions';





const router = createBrowserRouter([
  {
    path: '/',
    element:  <RootLayout />,
    children: [
      {index: true, element:<HomePage/>},
      {path: '/statistics', element: <StatisticsPage/>},
      {path: '/workout', element: <WorkLayout/>,
      children: [
        {index: true, element:<WorkoutPage/>},
        {path: ':wid', element:<ArmPage/>, loader: armLoader, id:'specific'},
        {path: ":wid", element:<LegPage/>},
        {path: ":wid", element:<CorePage/>},
        {path: ":wid", element:<BackPage/>},



      ],
      loader: workoutLoader,
       id: 'workout'},
      {path: '/plan', element: <PlanPage/>},
      {path: '/details/:sid', element: <WorkoutDetailPage/>, loader: detailLoader, id:'workout-detail' }


     
    ],
  },


]) 
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkoutData());

  }, [dispatch]);
  
  return <RouterProvider router={router}/>;

 


}

export default App;
