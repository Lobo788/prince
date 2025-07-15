import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID ="771325541260-vg3ivn62smc3otd2lq8087o8herp5c14.apps.googleusercontent.com"; // TODO: Replace with your actual client ID

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Registration successful!");
        setForm({ name: "", email: "", password: "" });
      } else {
        setError(data.error || data.message || "Registration failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("http://localhost:3001/api/auth/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenId: credentialResponse.credential }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";
      } else {
        setError(data.error || data.message || "Google sign up failed");
      }
    } catch (err) {
      setError("Google sign up network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <section className="py-20 bg-white text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition w-full"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
          <div className="my-6 flex items-center justify-center">
            <span className="text-gray-400 mx-2">or</span>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError("Google sign up failed")}
            width="100%"
          />
          {message && <div className="mt-4 text-green-600">{message}</div>}
          {error && <div className="mt-4 text-red-600">{error}</div>}
        </div>
      </section>
    </GoogleOAuthProvider>
  );
};

export default SignUp; 