import React, { useState } from 'react';
import StudentList from './StudentList';

function ClassDetail({ classData, className, onBack }) {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const getPerformanceClass = (value) => {
    if (value >= 90) return 'excellent';
    if (value >= 80) return 'good';
    if (value >= 70) return 'average';
    return 'needs-improvement';
  };

  const getSubjectIcon = (subject) => {
    switch (subject.toLowerCase()) {
      case 'math': return '📐';
      case 'english': return '📚';
      case 'science': return '🔬';
      default: return '📊';
    }
  };

  return (
    <div className="class-detail">
      <div className="detail-header">
        <div className="detail-title">
          <h2>{classData.name} - Detailed View</h2>
          <p className="detail-subtitle">
            {classData.students.length} students • Overall Average: {classData.averages.overall}%
          </p>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-metrics">
          <div className="metrics-row">
            <div className="metric-item">
              <div className="metric-icon">📐</div>
              <div className="metric-info">
                <span className="metric-label">Math Average</span>
                <span className={`metric-value ${getPerformanceClass(classData.averages.math)}`}>
                  {classData.averages.math}%
                </span>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">📚</div>
              <div className="metric-info">
                <span className="metric-label">English Average</span>
                <span className={`metric-value ${getPerformanceClass(classData.averages.english)}`}>
                  {classData.averages.english}%
                </span>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">🔬</div>
              <div className="metric-info">
                <span className="metric-label">Science Average</span>
                <span className={`metric-value ${getPerformanceClass(classData.averages.science)}`}>
                  {classData.averages.science}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="student-section">
          <div className="section-header">
            <h3>Student Performance</h3>
            <div className="subject-filter">
              <select 
                value={selectedSubject} 
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Subjects</option>
                <option value="math">Math</option>
                <option value="english">English</option>
                <option value="science">Science</option>
              </select>
            </div>
          </div>
          
          <StudentList 
            students={classData.students}
            selectedSubject={selectedSubject}
          />
        </div>
      </div>
    </div>
  );
}

export default ClassDetail; 