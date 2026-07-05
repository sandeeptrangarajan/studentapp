import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import StudentProfile from "./pages/StudentProfile";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Notifications from "./pages/Notifications";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/notifications">Notifications</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;