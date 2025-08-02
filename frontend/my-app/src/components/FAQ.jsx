import "../styles/faq.css";
import bg from "../assets/rules-bg.jpg";

const faqList = [
  {
    question: "WHO CAN PARTICIPATE?",
    answer: "College/university students irrespective of branch, year, domain, across the country are encouraged to take part in this renowned competition.",
  },
  {
    question: "HOW DO I REGISTER?",
    answer: "Team Leader has to register through the Google Form.",
  },
  {
    question: "WHEN TO REGISTER?",
    answer: "Team Leader has to register on or before 10th June, 2025 tentatively.",
  },
  {
    question: "WHAT IF I DO NOT REGISTER?",
    answer: "Unregistered team won't be allowed to take part in the competition after the deadline.",
  },
  {
    question: "IS THERE ANY REGISTRATION FEE?",
    answer: "No.",
  },
  {
    question: "CAN ANY TEAM PARTICIPATE IN MORE THAN ONE PROBLEM STATEMENT?",
    answer: "NO.",
  }
];

const FAQ = () => {
  

  return (
    <section id="FAQ" className="faq-section" style={{ backgroundImage: `url(${bg})` }}>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqList.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h3>{index + 1}. {faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
