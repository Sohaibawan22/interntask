import React from 'react';

function ClassComparison({ data, onClassSelect }) {
  const { classes } = data;
  const classKeys = Object.keys(classes);

  const getPerformanceClass = (value) => {
    if (value >= 90) return 'excellent';
    if (value >= 80) return 'good';
    if (value >= 70) return 'average';
    return 'needs-improvement';
  };

  return (
    <section className="class-comparison">
      <h2 className="section-title">Class-by-Class Comparison</h2>
      <p className="section-description">
        Direct comparison of overall performance between classes
      </p>
      <div className="comparison-grid">
        {classKeys.map((classKey) => {
          const classData = classes[classKey];
          const { name, averages } = classData;
          
          return (
            <div 
              key={classKey} 
              className="class-card"
              onClick={() => onClassSelect(classKey)}
            >
              <div className="class-header">
                <h3 className="class-name">{name}</h3>
                <div className={`class-overall ${getPerformanceClass(averages.overall)}`}>
                  {averages.overall}%
                </div>
              </div>
              <div className="class-subjects">
                <div className="subject-item">
                  <span className="subject-label">Math</span>
                  <span className={`subject-score ${getPerformanceClass(averages.math)}`}>
                    {averages.math}%
                  </span>
                </div>
                <div className="subject-item">
                  <span className="subject-label">English</span>
                  <span className={`subject-score ${getPerformanceClass(averages.english)}`}>
                    {averages.english}%
                  </span>
                </div>
                <div className="subject-item">
                  <span className="subject-label">Science</span>
                  <span className={`subject-score ${getPerformanceClass(averages.science)}`}>
                    {averages.science}%
                  </span>
                </div>
              </div>
              <div className="class-footer">
                <span className="student-count">
                  {classData.students.length} students
                </span>
                <button className="view-details-btn">
                  View Details →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ClassComparison; 