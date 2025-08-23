import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

type Props = {
 
}
export const Dashboard = ({}: Props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
    
  }
  return ( 
    <div>
      Dashboard Page
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}