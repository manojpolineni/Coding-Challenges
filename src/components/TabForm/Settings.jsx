import React from 'react'

const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Select your theme:</h2>
      <div className="flex flex-col gap-2">
        <div>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={handleChange}
              className="ml-2 mr-2"
            />
            Dark
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={handleChange}
              className="ml-2 mr-2"
            />
            Light
          </label>
        </div>
      </div>
    </div>
  )
}

export default Settings