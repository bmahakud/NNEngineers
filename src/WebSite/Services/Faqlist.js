import classes from "./Faqlist.module.css";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function Faqlist() {
  const initialData = [
    {
      question: "1. What is DiracAI?",
      answer:
        "DiracAI is an educational technology company that offers platforms for teaching and learning, assisting both teachers and students in their respective endeavours.",
    },
    {
      question:
        "2. How DiracAI is different of other edtech learning platforms?",
      answer:
        "DiracAI respects academic research! That is how we are unique. We offer a large selection of textbooks in a tailored format that improves organisation for both teaching and monitoring. Additionally, student monitoring is carried out through cutting-edge data analysis methods that were created through cutting-edge research. Additionally, both secondary and higher education are a priority of ours.",
    },

    {
      question: "3. Who can use DiracAI tools?",
      answer:
        "Our tools are for anybody who wishes to teach or learn. We offer our platform for schools, colleges and universities",
    },

    {
      question: "4. Is DiracAI Free For All?",
      answer:
        "Basic plans are free for all. For institutes we charge vey little if they seek certain services from us. However we wish we can make the platform free for everybody someday.",
    },

    {
      question:
        "5. I am Facing some problems in using the platform. who should i Contact ?",
      answer:
        "Please send us an email in the address provided in the contact section. We will get back to you.",
    },

    {
      question: "6. Are there teachers in DiracAI who can teach in person ?",
      answer:
        "No, we do not provide teachers. We just provide a platform using which anybody can teach.",
    },
  ];

  const [faqData, setFaqData] = useState(initialData);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
  };

  return (
    <div className={classes.faqContainer}>
      <div className={classes.mainTitleContainer}>
        Frequently Asked Questions
      </div>

      <div className={classes.mainContainer}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={classes.questionsContainer}
            onClick={() => toggleAnswer(index)}
          >
            <div className={classes.queContainer}>
              <div className={classes.que1}>{faq.question}</div>
              <BsChevronDown className={classes.arrow} />
            </div>

            {selectedQuestionIndex === index && (
              <div className={classes.ans1}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqlist;
