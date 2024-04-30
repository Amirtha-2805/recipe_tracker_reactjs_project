import { createSlice } from '@reduxjs/toolkit';
export const counterSlice=createSlice({
    name:"userSignupLoginDetails",    
    initialState:{
       usersignup:{
            name:"",
            email:"",
            password:"",
            age:"",
            gender:"",
            phone:"",
            address:""
        },
        userlogin:{
            email:"",
            password:""
        }
    },
        reducers:{
        signup:(state,action)=>{
            state.usersignup=action.payload
        },
        uLogin:(state,action)=>{
            state.userlogin=action.payload
        }       
    }
})
export const { signup,uLogin } = counterSlice.actions

export default counterSlice.reducer