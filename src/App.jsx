import React from 'react';
import './App.css'
import Otp from './components/Otp';
import Form from './components/TabForm/Form';
import AutoCompleteSearchForm from './components/AutoCompleteForm/AutoCompleteSearchForm';
import { Route, Routes } from 'react-router';
import Navbar from './Navbar';
import Pagination from './components/Pagination';

function App() {

  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-gray-10">
        {/* Navbar */}
        <Navbar />
        {/* Pages to render  */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/autocomplete" element={<AutoCompleteSearchForm />} />
            <Route path="/pagination" element={<Pagination />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App
