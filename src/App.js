import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { mockData } from './utils/mockData';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // We simulate a data fetch by setting the mockData after a short delay
    const fetchData = setTimeout(() => {
      setData(mockData); 
    }, 500); 

    return () => clearTimeout(fetchData);
  }, []);

  if (!data) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Dashboard data={data} /> 
    </div>
  );
}

export default App;
