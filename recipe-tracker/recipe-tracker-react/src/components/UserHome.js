import { Link } from "react-router-dom"
import "../styles/userhome.css"
import { useNavigate } from "react-router-dom";
export default function UserHome(){
    const navigate = useNavigate();
    const userLogOut=()=>{
        navigate("/")
    }
    return(
        <>
        <div className="body">
            <center><h3 className="userHead"> Home</h3></center>
        <div className="user">
        <h4 className="heading"><b>UserFeatures</b></h4>
        <ul className="user-feature">
            <li className="allrecipes"><Link className="userlink" >All Recipes</Link></li>
            <li className="savedrecipes"><Link className="userlink">Saved Recipes</Link></li>                       
        </ul>
        <center>
            <div className="userLogout">
        <button className="btn btn-danger" onClick={userLogOut}>Logout</button>
        </div>
        </center>
        </div>
        </div>
        </>
    )
}