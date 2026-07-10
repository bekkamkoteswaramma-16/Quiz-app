import { useState, useEffect } from 'react';
import { questions } from './data/questions';

const Quiz = ({ onQuizComplete }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!showAnswer && time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else if (time === 0 &&!showAnswer) {
      handleNext(); // time ayithe auto next
    }
  }, [time, showAnswer]);

  const handleAnswer = (index, isCorrect) => {
    setSelected(index);
    setShowAnswer(true);
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      handleNext();
    }, 1500); // 1.5 sec tarvata next question ki velthadi
  };

  const handleNext = () => {
    setTime(30);
    setSelected(null);
    setShowAnswer(false);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      onQuizComplete(score); // anni ayaka dashboard ki
    }
  };

  const q = questions[currentQ];

  return (
    <div style={{maxWidth: '600px', margin: '40px auto', padding: '25px', border: '2px solid #4F46E5', borderRadius: '12px', backgroundColor: '#1e1e1e'}}>

      {/* Top bar */}
      <div style={{display: 'flex', justifyContent: 'space-between', color: 'white'}}>
        <h3>Question {currentQ + 1} / {questions.length}</h3>
        <h3 style={{color: time < 10? 'red' : 'lightgreen'}}>Time: {time}s</h3>
      </div>

      {/* Question */}
      <h2 style={{color: 'white', marginTop: '15px'}}>{q.question}</h2>

      {/* OPTIONS HERE */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px'}}>
        {q.options.map((opt, index) => {
          let btnStyle = {
            padding: '14px',
            borderRadius: '8px',
            border: '1px solid #4F46E5',
            backgroundColor: '#2a2a2a',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            textAlign: 'left'
          };

          if(showAnswer) {
            if(opt.isCorrect) btnStyle = {...btnStyle, backgroundColor: 'green', border: '2px solid lightgreen'};
            else if(selected === index) btnStyle = {...btnStyle, backgroundColor: 'red', border: '2px solid darkred'};
          }

          return (
            <button
              key={index}
              onClick={() =>!showAnswer && handleAnswer(index, opt.isCorrect)}
              style={btnStyle}
              disabled={showAnswer}
            >
              {index + 1}. {opt.text}
            </button>
          )
        })}
      </div>
    </div>
  );
};
export default Quiz;