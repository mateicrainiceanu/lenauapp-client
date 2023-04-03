
import React, {useState} from "react";
import News from "./pages/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import User from "./pages/User";
import Contact from "./pages/Contact";
import PrezentareGenerala from "./pages/PrezentareGenerala";
import Conducere from "./pages/Conducere";
import Legislatie from "./pages/Legislatie";

import Login from "./pages/Login";

function App(){
  
  const [user, setStateUser] = useState(JSON.parse(localStorage.getItem("user")));

  function setUser (user){
    setStateUser(()=>{
      localStorage.setItem("user", JSON.stringify(user));
      return(user);
    })
  };

  function resetUser(){
    localStorage.clear();
    setStateUser({});
  };

  return(
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user}/>}>
          <Route index element={<Home />} />
          <Route path="news" element={<News limit={null} navbarbg={true}/>} />
          <Route path="login" element={<Login setUser={setUser}/>}/>
          <Route path="user" element={<User user={user} setUser={setUser} resetUser={resetUser}/>}/>
          <Route path="prezentare-generala" element={<PrezentareGenerala />} />
          <Route path="conducerea" element={<Conducere/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="legislatie" element={<Legislatie />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );

};

export default App;