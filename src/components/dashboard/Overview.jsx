import React from 'react';

const Overview = () => {
  // Sample key metrics data
  const keyMetrics = [
    { name: 'Sales Revenue', value: '$10,000' },
    { name: 'Website Traffic', value: '10,000 visits' },
    { name: 'User Engagement', value: '70%' },
  ];
  
  const topPerformers = [
    { name: 'Product A', value: '$5,000' },
    { name: 'Product B', value: '$3,000' },
    { name: 'Product C', value: '$2,000' },
  ];



  return (
    <div className="overview p-4 bg-white shadow-md rounded-md  border border-b">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className='mt-2 mb-2 border border-b-1'>
        <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
        <ul>
          {keyMetrics.map(metric => (
            <li key={metric.name} className="mb-1">
              <span className="font-medium">{metric.name}:</span> {metric.value}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="top-performers">
        <h3 className="text-lg font-semibold mb-2">Top Performers</h3>
        <ul>
          {topPerformers.map(performer => (
            <li key={performer.name} className="mb-1">
              <span className="font-medium">{performer.name}:</span> {performer.value}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Overview;
