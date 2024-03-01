import { useState } from "react";

export function NewBoxForm({ createBox }) {

  const [formData, setFormData] = useState({ height: "", width: "", backgroundColor: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add</button>
      </form>
    </div>
  );
}

function uuid() {
  return Math.random().toString(36).substring(2, 9);
}