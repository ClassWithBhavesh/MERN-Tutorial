import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Tools from "./pages/Tools";
import ToolDetails from "./pages/ToolDetails";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/tools" element={<Tools />} />

        <Route path="/tools/:id" element={<ToolDetails />} />

        <Route
          path="/saved"
          element={
            <ProtectedRoute>
              <Saved />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;