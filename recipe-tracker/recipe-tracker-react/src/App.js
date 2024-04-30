import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import SignUp from './components/SignUp';
import LoginAdmin from './components/LoginAdmin';
import Userlogin from './components/UserLogin';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import Auth from './components/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>         
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/loginadmin' element={<LoginAdmin/>}/>
            <Route path='/userlogin' element={<Userlogin/>}/>
            <Route path='/adminhome' element={<AdminHome/>}/>
            <Route path='/userhome' element={<UserHome/>}/>
            <Route path='/auth' element={<Auth/>}/>  
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
