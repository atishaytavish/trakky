import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import UserAdminForms from './pages/login';
import ImageUploadPage from './pages/user';
import AdminPage from './pages/admin';
import AdminUser from './pages/admin_user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAdminForms/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin/:username" element={<AdminUser/>}/>
        <Route path="/user" element={<ImageUploadPage/>}/>
        {/* <Route path="/login" element={<Login/>}/> */} */
      </Routes>
    </BrowserRouter>
  );
}

export default App;
