import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Form submitted:", { username, email, password });
    alert("User registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Register</button>
    </form>
  );
}
