
import React, { useState } from "react";

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

 
  const [submittedData, setSubmittedData] = useState([]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    

    const newEntry = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    setSubmittedData((prev) => [...prev, newEntry]);

    
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  
  const handleDelete = (index) => {
    setSubmittedData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center items-start gap-10 p-10">
      
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

     
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLoginMode(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLoginMode(false)}
          >
            Signup
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

       
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-3 mb-4 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 mb-4 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full p-3 mb-4 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          {!isLoginMode && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full p-3 mb-4 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {isLoginMode && (
            <div className="text-right mb-2">
              <a href="#" className="text-cyan-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            {isLoginMode ? "Login" : "Signup"}
          </button>

          <p className="text-center text-gray-600 mt-4">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-cyan-600 hover:underline"
            >
              {isLoginMode ? "Signup now" : "Login"}
            </a>
          </p>
        </form>
      </div>

      
      <div className="w-[400px] bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Submitted Data</h3>
        {submittedData.length === 0 ? (
          <p className="text-gray-500">No data submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {submittedData.map((entry, index) => (
              <li
                key={index}
                className="border p-3 rounded-lg flex justify-between items-start bg-gray-50"
              >
                <div>
                  <p><strong>Name:</strong> {entry.name || "-"}</p>
                  <p><strong>Email:</strong> {entry.email}</p>
                  <p><strong>Password:</strong> {entry.password}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-4 text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
