import React , {useState} from 'react'

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: "What is BMI?",
        answer:
          "BMI stands for Body Mass Index. It is a simple calculation using a person’s height and weight to determine their body fat category.",
      },
      {
        question: "How can I calculate my BMI?",
        answer:
          "You can calculate your BMI by dividing your weight in kilograms by the square of your height in meters. Or use our easy BMI Calculator!",
      },
      {
        question: "What are the BMI categories?",
        answer:
          "BMI categories include: Underweight (BMI < 18.5), Normal weight (18.5 - 24.9), Overweight (25 - 29.9), and Obesity (BMI 30 or higher).",
      },
      {
        question: "How often should I check my BMI?",
        answer:
          "It is recommended to check your BMI periodically, especially if you are working on weight management or fitness goals.",
      },
      {
        question: "Can BMI be inaccurate?",
        answer:
          "Yes, BMI might not be accurate for athletes or individuals with high muscle mass, as it does not distinguish between muscle and fat.",
      },
    ];
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
  <>
  <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 text-red-600 font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}
