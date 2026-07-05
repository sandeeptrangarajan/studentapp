import { useState, useEffect } from "react";
import { api } from "../api/api";
import mockNotifications from "../mockData/notifications.json";
import Loading from "../components/Loading";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const res = await api.get("/notifications");
        setNotifications(res.data);
      } catch (err) {
        console.error("API failed, using mock data:", err.message);
        setNotifications(mockNotifications);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n) => (
          <li key={n.id}>{n.title} — {n.date}</li>
        ))}
      </ul>
    </div>
  );
}
export default Notifications;