import React from 'react';
import './App.css'
import Otp from './components/Otp';
import Form from './components/TabForm/Form';
import AutoCompleteSearchForm from './components/AutoCompleteForm/AutoCompleteSearchForm';

function App() {

  return (
    <>
      <h1 className='text-2xl font-bold  text-center capitalize  my-5'>Challenges </h1>
      {/* <Otp/> */}
      <Form />
      <AutoCompleteSearchForm/>
    </>
  );
}

export default App
