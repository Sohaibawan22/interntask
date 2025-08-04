import React from 'react';

function StudentList({ students, selectedSubject }) {
  // A helper function to determine the color class based on the score value.
  const getPerformanceClass = (value) => {
    if (value >= 90) return 'excellent';
    if (value >= 80) return 'good';
    if (value >= 70) return 'average';
    return 'needs-improvement';
  };

  // A helper function to sort students based on the selected subject.
  const sortStudents = (students, subject) => {
    // If 'all' is selected, sort by the overall average.
    if (subject === 'all') {
      return [...students].sort((a, b) => {
        // Correctly access scores using the nested 'scores' object.
        const aAvg = (a.scores.math + a.scores.ela + a.scores.science) / 3;
        const bAvg = (b.scores.math + b.scores.ela + b.scores.science) / 3;
        return bAvg - aAvg;
      });
    } else {
      // Sort by the selected subject's score.
      // Correctly access scores using the nested 'scores' object and the dynamic key.
      return [...students].sort((a, b) => b.scores[subject] - a.scores[subject]);
    }
  };

  const sortedStudents = sortStudents(students, selectedSubject);

  return (
    <div className="student-list">
      <div className="list-header">
        <div className="header-cell">Student</div>
        <div className="header-cell">Math</div>
        <div className="header-cell">English</div>
        <div className="header-cell">Science</div>
        <div className="header-cell">Average</div>
      </div>
      
      <div className="list-body">
        {sortedStudents.map((student, index) => {
          // Correctly calculate the average using nested scores.
          const average = Math.round((student.scores.math + student.scores.ela + student.scores.science) / 3);
          
          return (
            <div key={student.id} className="student-row">
              <div className="student-cell">
                <div className="student-info">
                  <span className="student-name">{student.name}</span>
                  <span className="student-rank">#{index + 1}</span>
                </div>
              </div>
              {/* Correctly display individual scores using nested scores. */}
              <div className={`score-cell ${getPerformanceClass(student.scores.math)}`}>
                {student.scores.math}%
              </div>
              <div className={`score-cell ${getPerformanceClass(student.scores.ela)}`}>
                {student.scores.ela}%
              </div>
              <div className={`score-cell ${getPerformanceClass(student.scores.science)}`}>
                {student.scores.science}%
              </div>
              <div className={`score-cell average ${getPerformanceClass(average)}`}>
                {average}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
