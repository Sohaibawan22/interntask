import React from 'react';

function MetricCard({ title, value, unit, color, icon }) {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'metric-blue';
      case 'green': return 'metric-green';
      case 'purple': return 'metric-purple';
      case 'orange': return 'metric-orange';
      default: return 'metric-blue';
    }
  };

  const getPerformanceClass = () => {
    if (value >= 90) return 'excellent';
    if (value >= 80) return 'good';
    if (value >= 70) return 'average';
    return 'needs-improvement';
  };

  return (
    <div className={`metric-card ${getColorClass()}`}>
      <div className="metric-icon">{icon}</div>
      <div className="metric-content">
        <h3 className="metric-title">{title}</h3>
        <div className={`metric-value ${getPerformanceClass()}`}>
          {value}{unit}
        </div>
      </div>
    </div>
  );
}

export default MetricCard; 