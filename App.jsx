
import Home from "./components/FunctionalComponent/Home"
import About from "./components/FunctionalComponent/About"
import Gallery from "./components/FunctionalComponent/Gallery"
import Contact from "./components/FunctionalComponent/Contact"
import Navbar from "./components/FunctionalComponent/Navbar"
import Signup from "./components/FunctionalComponent/Signup"
import Login from "./components/FunctionalComponent/Login"
import UseState from "./components/FunctionalComponent/Hooks/useState"
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect"
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI"
import UseEffectImageAPI from "./components/FunctionalComponent/Hooks/UseEffectImageAPI"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import { useState } from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);

  };

  const handleLogout = () => {
    setIsAuthenticated(false);

  };

  return (<div>
    <BrowserRouter>
      {!isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<Signup onLogin={handleLogin} />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery" />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/UseState" element={<UseState />}></Route>
            <Route path="/UseEffect" element={<UseEffect />}></Route>
            <Route path="UseEffectAPI" element={<UseEffectAPI/>}></Route>
            <Route path="UseEffectImageAPI" element={<UseEffectImageAPI/>}></Route>
        
          </Routes>
        </>
      )}

    </BrowserRouter>
  </div >
  )
};

export default App;
