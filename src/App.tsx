import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./features/Login/Login";
import { Dashboard } from "./features/Dashboard/Dashboard";
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";

const RootRedirect = () => {
  const { token } = useSelector((s: RootState) => s.auth);
  return token ? <Navigate to="/dashboard" replace /> : <Login />;
}
export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}