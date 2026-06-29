import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      const websiteUrl =
        import.meta.env.VITE_WEBSITE_URL || "http://localhost:5173";
      window.location.href = `${websiteUrl}/login`;
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
}
