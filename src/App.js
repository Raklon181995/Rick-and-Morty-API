import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";


import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Liked from "./Pages/Liked";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked />} />
      
    </Routes>
  </Router>
  );
}


const Home = () => {

  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;


useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateFetchedData(data);
  })();
}, [api]);
return(
  <div className="App">

    <h1 className="text-center mb-3">Characters</h1>
    <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
    <div className="container" align="center">
    <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
             
            </div>
          </div>
     </div>
  </div>

);
};

export default App;
