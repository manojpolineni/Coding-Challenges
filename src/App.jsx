import React from 'react';
import './App.css'
import Otp from './components/Otp';
import Form from './components/TabForm/Form';
import AutoCompleteSearchForm from './components/AutoCompleteForm/AutoCompleteSearchForm';
import { Route, Routes, Navigate } from "react-router";
import Navbar from './Navbar';
import Pagination from './components/Pagination';
import Timer from './components/Timer';
import Virtualization from './components/Virtualization';

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
            <Route path='/timer' element={<Timer />} />
            <Route path='/virtualize' element={<Virtualization/>}/>
            {/* Redirect to Login for unknown URLs */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App
