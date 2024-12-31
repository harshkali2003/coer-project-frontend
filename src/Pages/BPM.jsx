import React , {useState} from 'react'

export default function BPM() {



  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBMI);

      if (calculatedBMI < 18.5) {
        setMessage('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        setMessage('Normal weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    } else {
      setMessage('Please enter valid inputs.');
    }
  };
  return (
  <>
   <div className="bg-gray-100 min-h-screen flex items-center justify-center px-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">BMI Calculator</h1>

        <div className="mb-4">
          <label htmlFor="weight" className="block text-red-600 mb-2">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full text-red-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your weight"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="height" className="block text-red-600 mb-2">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border  text-red-600  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your height"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl text-red-600">Your BMI: {bmi}</p>
            <p className="text-lg text-red-600 font-semibold">{message}</p>
          </div>
        )}
      </div>
    </div>
  </>
  )
}
