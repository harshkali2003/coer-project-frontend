import React , {useState} from 'react'

export default function Services() {
    const [weight, setWeight] = useState('');
    const [dietPlan, setDietPlan] = useState('');
    const [exercisePlan, setExercisePlan] = useState('');
  
    const suggestPlan = () => {
      if (!weight || isNaN(weight) || weight <= 0) {
        setDietPlan('');
        setExercisePlan('');
        alert('Please enter a valid weight.');
        return;
      }
  
      const weightValue = parseFloat(weight);
  
      if (weightValue < 50) {
        setDietPlan('High-calorie diet with protein-rich foods, nuts, dairy, and whole grains.');
        setExercisePlan('Light cardio and strength training to build muscle mass.');
      } else if (weightValue >= 50 && weightValue <= 70) {
        setDietPlan('Balanced diet with moderate portions of carbs, proteins, and fats.');
        setExercisePlan('Regular cardio and strength training to maintain fitness.');
      } else {
        setDietPlan('Low-calorie diet with vegetables, lean proteins, and limited carbs.');
        setExercisePlan('High-intensity interval training (HIIT) and cardio for weight loss.');
      }
    };
  return (
 <>
 <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Diet & Exercise Suggestions</h1>

        <div className="mb-6">
          <label htmlFor="weight" className="block text-red-600 mb-2">Enter Your Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your weight"
          />
        </div>

        <button
          onClick={suggestPlan}
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
        >
          Get Suggestions
        </button>

        {dietPlan && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-red-600">Suggested Diet</h2>
            <p className="mt-2 text-gray-700">{dietPlan}</p>
          </div>
        )}

        {exercisePlan && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-red-600">Suggested Exercise</h2>
            <p className="mt-2 text-gray-700">{exercisePlan}</p>
          </div>
        )}
      </div>
    </div>
 </>
  )
}
