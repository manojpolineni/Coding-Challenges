import React from "react";

const Intrests = ({ data, setData }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((interest) => interest !== e.target.name),
    }));
  };

  return (
    <>
      <h2 className="text-lg font-bold mb-2">Select your interests:</h2>
      <div className="flex flex-col gap-2">
        <div>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.includes("coding")}
              onChange={handleChange}
              className="ml-2 mr-2"
            />
            Coding
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={interests.includes("reading")}
              onChange={handleChange}
              className="ml-2 mr-2"
            />
            Reading
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="gaming"
              checked={interests.includes("gaming")}
              onChange={handleChange}
              className="ml-2 mr-2"
            />
            Gaming
          </label>
        </div>
      </div>
    </>
  );
};

export default Intrests;
