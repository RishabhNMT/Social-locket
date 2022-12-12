import React from 'react';
import ComingSoon from './ComingSoon/ComingSoon'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<ComingSoon />}></Route>
        <Route path='/ComingSoon' element={<ComingSoon />}></Route>
      </Routes>
    </>
  );
}

export default App;
