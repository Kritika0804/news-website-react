import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Newsdetails from './Components/Newsdetails';





 
function App() {

 
  return (
    <div>
      
      <header className="text-center pb-11">
      <Navbar/>
      </header>
      <BrowserRouter>
      
      <div>
        <Routes>
          <Route exact path="/" element={<News/>} />
          <Route exact path="/newsdetails" element={<Newsdetails/>} />
        </Routes>
      </div>
    
    </BrowserRouter>
      {/* <News/> */}
    </div>
  );
}

export default App;
