import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Data Submitted Successfully");
    // You can send data to a backend API using a POST request
  };

  return (
    <div className="dashboard">
      <h1>Healthcare Dashboard</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload File:
          <input
            type="file"
            name="file"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
