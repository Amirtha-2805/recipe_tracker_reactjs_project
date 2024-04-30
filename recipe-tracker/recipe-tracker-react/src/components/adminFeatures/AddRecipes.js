import { setAddRecipes } from "../../redux/slices/adminSlice"
import { useSelector,useDispatch } from 'react-redux';


const AddRecipes=()=>{
    const dispatch=useDispatch()
    const adminFeaturesSliceData=useSelector((state)=>state.adminDetails)
    return(
        <>
            <h1>Add Recipes</h1>            
            <div>
                <input type="text" className="form-control" placeholder="Enter Recipe Title" onKeyUp={(e)=>dispatch(setAddRecipes({
                    ...adminFeaturesSliceData.addRecipes,
                    recipe_title:e.target.value
                }))}></input>
            </div>
            <div>
                <input type="text" className="form-control" placeholder="Enter Recipe ingredients" onKeyUp={(e)=>dispatch(setAddRecipes({
                    ...adminFeaturesSliceData.addRecipes,
                    ingredients:e.target.value
                }))}></input>
            </div>
            <div>
                <input type="text" className="form-control" placeholder="Enter Recipe details" onKeyUp={(e)=>dispatch(setAddRecipes({
                    ...adminFeaturesSliceData.addRecipes,
                    recipe_details:e.target.value
                }))}></input>
            </div>

        </>
    )
}
export default AddRecipes