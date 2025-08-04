import React from 'react';

function Header({ data, onBack }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          {onBack && (
            <button className="back-button" onClick={onBack}>
              ← Back to Overview
            </button>
          )}
          <div className="teacher-info">
            <h1 className="dashboard-title">Multi-Class Performance Dashboard</h1>
            <div className="teacher-details">
              <span className="teacher-name">{data.teacher.name}</span>
              <span className="teacher-school">{data.teacher.school}</span>
              <span className="teacher-grade">{data.teacher.grade}</span>
            </div>
          </div>
        </div>
        <div className="header-right">
        
        </div>
      </div>
    </header>
  );
}

export default Header; 