import { Link } from "react-router-dom"
import "../styles/adminhome.css"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { adminFeatures } from "../redux/slices/adminSlice";
import AddRecipes from "./adminFeatures/AddRecipes";
import UserList from "./adminFeatures/UserList"; 
import { IconName } from "react-icons/ai";
import {GiHamburgerMenu} from 'react-icons/gi'

export default function AdminHome(){
    const adminSlice=useSelector((state)=>state.adminDetails)
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const adminLogOut=()=>{
        navigate("/")
    }
    // const addAllRecipes=()=>{
    //     dispatch(adminFeatures("addRecipes"))

    // }
    return(
        // <>

        // <div className="adminbody">

        //         <center><h3 className="adminhead">Home</h3></center>
        //         {adminSlice.adminFeatureStatus=="allUsers"? <UserList/>:null}
            
        //             {JSON.stringify(adminSlice.adminFeatureStatus)}
        //         <div className="admin">
        //         <h4 className="adminhometitle"><b>Admin Features</b></h4>
        //         <ul className="admin-feature">
        //             <li className="userlist"><Link className="link" onClick={()=>dispatch(adminFeatures("allUsers"))}>UserList</Link></li>
        //             <li className="allRecipes"><Link className="link" >All Recipes</Link></li>
        //             <li className="addrecipes"><Link onClick={()=>dispatch(adminFeatures("addRecipes"))}>Add Recipes</Link></li>
        //             <li className="addrecipes"><Link className="link" to={"/"}>Home</Link></li>
        //         </ul>
        //         <center>
        //             <div className="adminlogout">
        //             <button className="btn btn-danger" onClick={adminLogOut}>Logout</button>
        //             </div>
        //         </center>
        //         </div>
        // </div>
        // </>
        <>
            <div className="sidenav">
                {adminSlice.adminFeatureStatus=="addRecipes" ? <AddRecipes/>:null}
                <header className="menuicon">
                    <GiHamburgerMenu/>         
              </header>

                <h4 className="adminhometitle"><b>Admin Features</b></h4>

                <ul>
                    <li><Link className="link" to={"/" }>Home</Link></li>
                    <li className="userlist"><Link className="link" onClick={()=>dispatch(adminFeatures("allUsers"))}>UserList</Link></li>
                     <li className="allRecipes"><Link className="link" >All Recipes</Link></li>
                     <li className="addrecipes"><Link className="link" onClick={()=>dispatch(adminFeatures("addRecipes"))}>Add Recipes</Link></li>
                   <li className="addrecipes"><Link className="link" to={"/"}>Home</Link></li>
                </ul>

            </div>
                
        </>
        
    )
}