import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Newsdetails from './Components/Newsdetails';
import Footer from './Components/Footer';





 
function App() {

 
  return (
    <div >
      
      <header className="text-center pb-11">
      <Navbar/>
      </header>
      <BrowserRouter>
      
      <div>
        <Routes>
          <Route exact path="/" element={<News/>} />
          <Route exact path="/newsdetails/:id" element={<Newsdetails/>} />
        </Routes>
      </div>
    
    </BrowserRouter>
      {/* <News/> */}
      <Footer/>
    </div>
  );
}

export default App;
