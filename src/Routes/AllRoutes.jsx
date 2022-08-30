import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Enterprise from "./Enterprise";
import HomePage from "./HomePage";
import Login from "./Login";
import Pricing from "./Pricing";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/enterprise" element={<Enterprise />} />

      <Route path="/dashboard/:page" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        }  
      />

    </Routes>
  );
}
export default AllRoutes;
