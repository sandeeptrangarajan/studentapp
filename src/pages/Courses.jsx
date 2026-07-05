import { useState, useEffect } from "react";
import { api } from "../api/api";
import mockCourses from "../mockData/courses.json";
import Loading from "../components/Loading";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (err) {
        console.error("API failed, using mock data:", err.message);
        setCourses(mockCourses);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>{c.name} — {c.instructor} ({c.credits} credits)</li>
        ))}
      </ul>
    </div>
  );
}
export default Courses;