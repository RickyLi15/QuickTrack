
import {configureStore} from '@reduxjs/toolkit';
import plannerSlice from './planner-slice';



const store = configureStore({
    reducer: {planner: plannerSlice.reducer},

});


export default store;