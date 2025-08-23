import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {
  roles?: string[];
}
export const ProtectedRoute = ({ roles }: Props) => {
  const location = useLocation();
  const { token, user } = useSelector((state: any) => state.auth)
  if (!token) {
    return <Navigate to={"/"} replace state={{ from: location }} />;
  }
  if (roles && !roles.length && !roles.includes(user.role)) {
    return <Navigate to={"/403"} replace />;
  }
  return <Outlet />
}