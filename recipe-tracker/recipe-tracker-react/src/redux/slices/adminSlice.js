import { createSlice } from '@reduxjs/toolkit';

export const adminSlice=createSlice({
    name:"adminDetails",    
    initialState:{
        adminFeatureStatus:"",
        addRecipes:{
            recipe_title:"",
            ingredients:"",
            recipe_details:""

        }
    },
        reducers:{
            adminFeatures:(state,action)=>{
                state.adminFeatureStatus=action.payload
            },
            setAddRecipes:(state,action)=>{
                state.addRecipes=action.payload
            }
       
    }
})
export const { adminFeatures,setAddRecipes } = adminSlice.actions

export default adminSlice.reducer