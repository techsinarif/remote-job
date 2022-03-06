import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import TextEditor from './utils/components/TextEditor';
import TobBar from './components/TobBar';
import Home from './components/Home';
import PostJob from './components/PostJob';
import './App.css';

function App() {
  return (
    <div className="App">
    <TobBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post-job" element={<PostJob />} />
      </Routes>
    </div>
  );
}

export default App;
