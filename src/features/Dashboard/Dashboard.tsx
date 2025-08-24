import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import Logo from 'assets/logo.png';
import Menu from 'assets/img_menu.png'
export const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())

  }
  return ( 
    <div className="wrap-dashboard">
      <div className="wrap-header">
        <div className="wrap-control">
          <button className="wrap-menu"><img src={Menu} alt="" /></button>
          <p className="wrap-img"><img src={Logo} alt="" /></p>
        </div>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
      <div className="wrap-body">

      </div>
    </div>
  );
}