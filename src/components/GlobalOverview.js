import React from 'react';
import MetricCard from './MetricCard';

function GlobalOverview({ data }) {
  const { globalAverages } = data;
  
  return (
    <section className="global-overview">
      <h2 className="section-title">Global Overview</h2>
      <p className="section-description">
        Overall performance across all students in both classes
      </p>
      <div className="metrics-grid">
        <MetricCard
          title="Overall Average"
          value={globalAverages.overall}
          unit="%"
          color="blue"
          icon="📊"
        />
        <MetricCard
          title="Math Average"
          value={globalAverages.math}
          unit="%"
          color="green"
          icon="📐"
        />
        <MetricCard
          title="English Average"
          value={globalAverages.english}
          unit="%"
          color="purple"
          icon="📚"
        />
        <MetricCard
          title="Science Average"
          value={globalAverages.science}
          unit="%"
          color="orange"
          icon="🔬"
        />
      </div>
    </section>
  );
}

export default GlobalOverview; 