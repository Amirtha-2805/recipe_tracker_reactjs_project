import {configureStore} from '@reduxjs/toolkit';
import counterReducer, { signup } from './slices/counter'
import adminReducer from './slices/adminSlice';


// function call with one object argument 

export default configureStore(
    {
        reducer:{
            userSignupLoginDetails:counterReducer,
            adminDetails:adminReducer,
        }
    }
)