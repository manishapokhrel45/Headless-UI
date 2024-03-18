import React from "react";

const Data = () => {
  // Sample data
  const statisticsData = [
    { label: "Total Users", value: 1000 },
    { label: "Active Users", value: 750 },
    { label: "New Sign-ups", value: 100 },
  ];

  return (
    <div className="p-8 flex h-screen items-center justify-center">
      {/* Statistics */}

      <div className="mb-4 bg-gray-200 p-4 rounded w-80 ">
        <h3 className="text-lg font-semibold mb-2">Statistics</h3>
        <ul className=" pl-4">
          {statisticsData.map(({ label, value }) => (
            <li key={label}>
              {label}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Data;
