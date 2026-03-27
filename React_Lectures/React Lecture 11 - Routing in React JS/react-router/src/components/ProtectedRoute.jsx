import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isAuthenticated = false; // simulate auth

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;