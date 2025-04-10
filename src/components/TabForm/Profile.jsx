import React from 'react'

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="flex justify-items-start flex-col gap-4 my-4 ">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
          className="border capitalize h-8 border-gray-400 rounded-md ml-3 px-2"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="Number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => handleChange(e)}
          className="border rounded-md border-gray-400 h-8 ml-6 px-2"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
          className="border border-gray-400 rounded-md h-8 ml-3 px-2"
        />
      </div>
    </div>
  );
}

export default Profile