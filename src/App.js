import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Dashbord from './components/dashbord';
function App() {
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" element={<Dashbord />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
