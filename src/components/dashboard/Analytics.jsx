import React from 'react';
const datas=[
    { label: 'Total Sessions', value: 1000 },
    { label: 'Average Session Duration', value: '5m 30s' },
    { label: 'Most Visited Page', value: '/home' },
    { label: 'Bounce Rate', value: '30%' },
    { label: 'Conversion Rate', value: '20%' },
]
const Analytics = () =>
{



//   const analyticsData = {
//     totalSessions: 1000,
//     avgSessionDuration: '5m 30s',
//     mostVisitedPage: '/home',
//     bounceRate: '30%',
//     conversionRate: '20%',
//   };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Analytics</h3>
      <div className="grid  grid-cols-2 gap-4">
      {datas.map((items)=>(
        <div key={items.label} className='bg-gray-100 p-4 rounded' >
           <p className='text-gray-600'> {items.label}</p>
         <p className='text-xl font-semibold'> {items.value}</p>
        </div>)
      )}
      </div>
    </div>
  );
};

export default Analytics;
