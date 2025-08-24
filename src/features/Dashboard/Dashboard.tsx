import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/authSlice";
import Logo from 'assets/logo.png';
import Menu from 'assets/img_menu.png'
import { SideSpaces } from "./Components/SideSpaces";
import { Board } from "../Board/Board";
import { WorkSpaces } from "./Components/WorkSpaces";
import { useState } from "react";
export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isOpenBoard = useSelector((state: any) => state.dashboard)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
  }
  const openSide = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="wrap-dashboard">
      <div className="wrap-header">
        <div className="wrap-control">
          <button className="wrap-menu" onClick={openSide}><img src={Menu} alt="" /></button>
          <p className="wrap-img"><img src={Logo} alt="" /></p>
        </div>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
      <div className={`wrap-body ${isOpen ? 'open' : ''}`} >
        <div className="l-inner">
          <SideSpaces />
          {
            isOpenBoard ? <Board /> : <WorkSpaces />
          }
        </div>
      </div>
    </div>
  );
}