import Home from "./components/FunctionalComponents/Home"
import About from "./components/FunctionalComponents/About"
import Gallery from "./components/FunctionalComponents/Gallery"
import Contact from "./components/FunctionalComponents/Contact"
import Navbar from "./components/FunctionalComponents/Navbar"
import Signup from "./components/FunctionalComponents/Signup"
import Login from "./components/FunctionalComponents/Login"
import UseState from "./components/FunctionalComponents/Hooks/UseState"
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect"
import UseEffectAPi from "./components/FunctionalComponents/Hooks/UseEffectAPI"
import UseEffectImageAPI from "./components/FunctionalComponents/Hooks/UseEffectImageAPI"
import UseRef from "./components/FunctionalComponents/Hooks/UseRef"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import { useState } from "react";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo"
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback"
import ReactLifecycleMethods from "./components/classComponents/ReactLifecycleMethods"
import UseContext from "./components/FunctionalComponents/Hooks/UseContext"
import Memo from "./components/FunctionalComponents/Memoization/Memo"


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
            <Route path="/react-lm" element={<ReactLifecycleMethods/>}></Route>
            <Route path="/UseState" element={<UseState />}></Route>
            <Route path="/UseEffect" element={<UseEffect />}></Route>
            <Route path="/UseEffectAPI" element={<UseEffectAPi/>}></Route>
            <Route path="/UseEffectImageAPI" element={<UseEffectImageAPI/>}></Route>
            <Route path="/use-ref" element={<UseRef/>}></Route>
            <Route path="/use-memo" element={<UseMemo/>}></Route>
            <Route path="/use-callback" element={<UseCallback/>}></Route>
            <Route path="/use-context" element={<UseContext/>}></Route>
            <Route path="/memo" element={<Memo/>}></Route>
           
        
          </Routes>
        </>
      )}

    </BrowserRouter>
  </div >
  )
};

export default App;