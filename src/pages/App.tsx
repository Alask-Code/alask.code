import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';

export default function App() {
  return (
    <Router useTransitions>
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </Router>
  );
}
