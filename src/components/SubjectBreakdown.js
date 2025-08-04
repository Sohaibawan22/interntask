import React from 'react';

function SubjectBreakdown({ data }) {
  const { classes, subjects } = data;
  const classKeys = Object.keys(classes);

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
    <section className="subject-breakdown">
      <h2 className="section-title">Subject Performance Breakdown</h2>
      <p className="section-description">
        Comparative view of performance across subjects
      </p>
      <div className="subjects-grid">
        {subjects.map((subject) => {
          const subjectLower = subject.toLowerCase();
          const room201Score = classes.room201.averages[subjectLower];
          const room202Score = classes.room202.averages[subjectLower];
          
          return (
            <div key={subject} className="subject-card">
              <div className="subject-header">
                <div className="subject-icon">{getSubjectIcon(subject)}</div>
                <h3 className="subject-name">{subject}</h3>
              </div>
              <div className="subject-comparison">
                <div className="class-score">
                  <span className="class-label">Room 201</span>
                  <span className={`score-value ${getPerformanceClass(room201Score)}`}>
                    {room201Score}%
                  </span>
                </div>
                <div className="comparison-bar">
                  <div className="bar-container">
                    <div 
                      className={`bar room201-bar ${getPerformanceClass(room201Score)}`}
                      style={{ width: `${room201Score}%` }}
                    ></div>
                    <div 
                      className={`bar room202-bar ${getPerformanceClass(room202Score)}`}
                      style={{ width: `${room202Score}%` }}
                    ></div>
                  </div>
                </div>
                <div className="class-score">
                  <span className="class-label">Room 202</span>
                  <span className={`score-value ${getPerformanceClass(room202Score)}`}>
                    {room202Score}%
                  </span>
                </div>
              </div>
              <div className="subject-difference">
                <span className="difference-label">Difference:</span>
                <span className={`difference-value ${Math.abs(room201Score - room202Score) > 5 ? 'significant' : 'minimal'}`}>
                  {Math.abs(room201Score - room202Score)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SubjectBreakdown; 