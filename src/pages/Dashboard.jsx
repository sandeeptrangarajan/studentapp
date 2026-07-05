import { useState, useEffect } from "react";
import { api } from "../api/api";
import mockStudents from "../mockData/students.json";
import mockCourses from "../mockData/courses.json";
import Loading from "../components/Loading";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get("/dashboard");
        setStudents(res.data.students);
        setCourses(res.data.courses);
      } catch (err) {
        console.error("API failed, using mock data:", err.message);
        setStudents(mockStudents);
        setCourses(mockCourses);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>Dashboard</h2>
    
      <p>Total Students: {students.length}</p>
      <p>Total Courses: {courses.length}</p>
    </div>
  );
}
export default Dashboard;