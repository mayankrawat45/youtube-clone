import { useState } from "react";

const Register = () => {
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

  return (
    <div className="mx-auto mt-10 max-w-md">
      <h2 className="mb-5 text-2xl font-bold">
        Register
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <button
          className="w-full rounded bg-red-600 p-2 text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;