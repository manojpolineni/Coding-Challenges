import React, { useState } from 'react';
import Profile from './Profile';
import Settings from './Settings';
import Interests from "./Intrests";

const tabs = [
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Interests",
    component: Interests,
  },
  {
    name: "Settings",
    component: Settings,
  },
];

const Form = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Manoj",
    age: 30,
    email: 'manoj@gmail.com',
    interests: ['coding', 'reading', 'gaming'],
    theme: 'dark',
  })
  const [erros, setErros] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const TabComponent = tabs[activeTab]?.component;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErros = {};

    if (!data.name) newErros.name = "Name is required";
    if (!data.age) newErros.age = "Age is required";
    if (!data.email) newErros.email = "Email is required";
    if (!data.interests.length)
      newErros.interests = "At least one interest is required";
    if (!data.theme) newErros.theme = "Theme is required";
    setErros(newErros);
   
    if (Object.keys(newErros).length === 0) {
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false); 
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white rounded-lg">
        <div className="flex border-gray-300">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 cursor-pointer border border-gray-300 ${
                activeTab === index ? "bg-blue-500 text-white " : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab?.name}
            </button>
          ))}
        </div>
        <div className="p-3 h-50 border w-full rounded-t-0 rounded-b-md">
          <TabComponent data={data} setData={setData} erros={erros} />
        </div>
        <div className="flex jus gap-3 p-3">
          <button
            className={`${
              activeTab === 0
                ? " disabled:cursor-not-allowed disabled:bg-gray-200 border border-gray-300 px-4 py-2 rounded-md "
                : "cursor-pointer border border-gray-300 px-4 py-2 rounded-md "
            }`}
            disabled={activeTab === 0}
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            Prev
          </button>

          <button
            className={`border border-gray-300 px-4 py-2 rounded-md transition-all ${
              activeTab === tabs.length - 1
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : "cursor-pointer hover:bg-gray-100"
            }`}
            disabled={activeTab === tabs.length - 1}
            onClick={() =>
              setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1))
            }
          >
            Next
          </button>

          {activeTab === tabs.length - 1 && (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      {formSubmitted && (
        <div className="flex justify-center flex-col">
          {data.name && (
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-lg font-bold mr-2">Name:</h2>
              <p>{data.name}</p>
            </div>
          )}
          {data.age && (
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-lg font-bold mr-2">Age:</h2>
              <p>{data.age}</p>
            </div>
          )}
          {data.email && (
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-lg font-bold mr-2">Email:</h2>
              <p>{data.email}</p>
            </div>
          )}
          {data.interests.length > 0 && (
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-lg font-bold mr-2">Interests:</h2>
              <p>{data.interests.join(", ")}</p>
            </div>
          )}
          {data.theme && (
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-lg font-bold mr-2">Theme:</h2>
              <p>{data.theme}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Form