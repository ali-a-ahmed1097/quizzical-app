import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Home from './components/Home';
import Blob from './components/Blob';
import Question from './components/Question';

export default function App() {
  const [quiz, setQuiz] = React.useState([]);

  async function generateQuiz() {
    let response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
    let questions = await response.json();
    setQuiz(questions.results.map(q => ({
      id: nanoid(),
      question: q.question,
      potential: [...q.incorrect_answers, q.correct_answer],
      correct: q.correct_answer,
      selected: ''
    })));
  }

  function selected(id, newSelected) {
    setQuiz(oldQuiz => oldQuiz.map(q => {
      return id === q.id ? { ...q, selected: newSelected } : q;
    }));
  }

  const questions = quiz.map(q => (
    <Question
      key={q.id}
      id={q.id}
      main={q.question}
      answers={q.potential}
      selected={q.selected}
      handleClick={selected}
    />
  ));

  return (
    <div className='full'>
      <Blob />
      {
        questions.length === 0 ?
          <Home generateQuiz={generateQuiz} />
          :
          <div className='home'>
            <div className='cards'>{questions}</div>
          </div>
      }
    </div>
  );
}