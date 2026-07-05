import { useState, useEffect } from "react";
import { api } from "../api/api";
import mockStudents from "../mockData/students.json";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const res = await api.get("/students");
        setStudents(res.data);
      } catch (err) {
        console.error("API failed, using mock data:", err.message);
        setStudents(mockStudents);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name} — {s.course}</li>
        ))}
      </ul>
    </div>
  );
}
export default StudentList;