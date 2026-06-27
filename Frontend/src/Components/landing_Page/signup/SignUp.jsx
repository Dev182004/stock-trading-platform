import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../Services/api";
import toast from "react-hot-toast";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(formData);
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

 try {
  const response = await api.post("/auth/signup", formData);

  toast.success(response.data.message);

  setFormData({
    username: "",
    email: "",
    password: "",
  });

  navigate("/login");
} catch (error) {
  toast.error(error.response?.data?.message || "Something went wrong");
}
};

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Username
            </label>

            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}