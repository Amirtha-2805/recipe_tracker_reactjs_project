import '../styles/adminlogin.css'
import { useNavigate } from "react-router-dom";
import NavBar from './Menu';

export default function LoginAdmin(){
    const navigate = useNavigate();

    const adminLogin=()=>{
       navigate("/adminhome")   
     }
    return(

        <>
        <div className='admin-login-body'>
        <NavBar/>
            <center><h3 className='admintitle'>Admin Login</h3></center>
            <div className="adminlogin">
                <div>
                    <label className='admin-login-label'>Email</label><input type="email" className="form-control" placeholder="Enter your email"/>
                </div>
                <div>
                    <label className='admin-login-label'>Password</label><input type="password" className="form-control" placeholder="Enter your password"/>
                </div>
                <br/>
                <div className='adminloginbtn'>
                  <button className='btn btn-primary' onClick={adminLogin}>Login</button>
                </div>
            </div>
            </div>
        </>
    )
}