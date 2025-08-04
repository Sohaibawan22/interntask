import React, { useState, useEffect } from 'react';
import Header from './Header';
import GlobalOverview from './GlobalOverview';
import ClassComparison from './ClassComparison';
import SubjectBreakdown from './SubjectBreakdown';
import ClassDetail from './ClassDetail';

function Dashboard({ data }) {
  const [selectedClass, setSelectedClass] = useState(null);
  const [viewMode, setViewMode] = useState('overview'); // 'overview' or 'detail'

  useEffect(() => {
    // Reset to overview when data changes
    setSelectedClass(null);
    setViewMode('overview');
  }, [data]);

  const handleClassSelect = (classKey) => {
    setSelectedClass(classKey);
    setViewMode('detail');
  };

  const handleBackToOverview = () => {
    setSelectedClass(null);
    setViewMode('overview');
  };

  if (viewMode === 'detail' && selectedClass) {
    return (
      <div className="dashboard">
        <Header data={data} onBack={handleBackToOverview} />
        <ClassDetail 
          classData={data.classes[selectedClass]}
          className={selectedClass}
          onBack={handleBackToOverview}
        />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header data={data} />
      <div className="dashboard-content">
        <GlobalOverview data={data} />
        <ClassComparison 
          data={data} 
          onClassSelect={handleClassSelect}
        />
        <SubjectBreakdown data={data} />
      </div>
    </div>
  );
}

export default Dashboard; 