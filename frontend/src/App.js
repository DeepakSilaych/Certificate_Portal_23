import './assets/css/App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Login from "./component/login";
import Auth from './component/auth';
import Pg1 from './component/pg1';
import Pg2 from "./component/pg2";
import Pg3 from "./component/pg3";
import Pg4 from "./component/pg4";
import Pg_ls_2 from './component/ls/pg_ls_2';
import Pg3_NTSS from './component/ls/pg3_ntss';
import Pg3_TSS from './component/ls/pg3_tss';
import Coming_soon from './component/soon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/0" element={<Auth/>} />
        <Route path="/1" element={<Pg1/>} />
        <Route path="/4" element={<Pg4/>} />

        <Route path="/2/ksp" element={<Pg2 project="ksp"/>} />
        <Route path="/3/ksp/mentee" element={<Pg3 project="ksp" ment="mentee"/>} />
        <Route path="/3/ksp/mentor" element={<Pg3 project="ksp" ment="mentor"/>} />

        <Route path="/2/soc" element={<Pg2 project="soc"/>} />
        <Route path="/3/soc/mentee" element={<Pg3 project="soc" ment="mentee"/>} />
        <Route path="/3/soc/mentor" element={<Pg3 project="soc" ment="mentor"/>} />

        <Route path="/2/sos" element={<Pg2 project="sos"/>} />
        <Route path="/3/sos/mentee" element={<Pg3 project="sos" ment="mentee"/>} />
        <Route path="/3/sos/mentor" element={<Pg3 project="sos" ment="mentor"/>} />

        <Route path="/2/itsp" element={<Pg2 project="itsp"/>} />
        <Route path="/3/itsp/mentee" element={<Pg3 project="itsp" ment="mentee"/>} />
        <Route path="/3/itsp/mentor" element={<Pg3 project="itsp" ment="mentor"/>} />

        <Route path="/ls" element={<Pg_ls_2/>} />
        <Route path="/3/ntss" element={<Pg3_NTSS/>}/>
        <Route path="/3/tss" element={<Pg3_TSS/>}/>

        <Route path="/soon" element={<Coming_soon/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
