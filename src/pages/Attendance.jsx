import { useState, useEffect } from "react";
import { api } from "../api/api";
import mockAttendance from "../mockData/attendance.json";
import Loading from "../components/Loading";

function Attendance() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAttendance = async () => {
      setLoading(true);
      try {
        const res = await api.get("/attendance");
        setRecords(res.data);
      } catch (err) {
        console.error("API failed, using mock data:", err.message);
        setRecords(mockAttendance);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {records.map((r) => (
          <li key={r.id}>{r.studentName} — {r.date} — {r.status}</li>
        ))}
      </ul>
    </div>
  );
}
export default Attendance;