import React from 'react';

const PlanningPage: React.FC = () => {
  return (
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl">Planning Page</h1>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Meals Section */}
          <div>
            {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
              <div key={meal} className="mb-6">
                <h2 className="font-bold">{meal}</h2>
                <textarea className="w-full h-24 border p-2" placeholder="Notes"></textarea>
              </div>
            ))}
          </div>

          {/* Calories and Progress */}
          <div className="text-center">
            <button className="bg-green-300 px-4 py-2 rounded-full">Calories</button>
            <div className="mt-8 w-32 h-32 border rounded-full flex items-center justify-center">
              Progress Circle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;
