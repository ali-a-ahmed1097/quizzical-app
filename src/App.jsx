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
      question: q.question,
      potential: q.incorrect_answers,
      correct: q.correct_answer
    })));
  }

  const questions = quiz.map(q => (
    <Question key={nanoid()} main={q.question} />
  ));
  
  return (
    <div className='full'>
      <Blob />
      {
        questions.length === 0 ?
          <Home generateQuiz={generateQuiz} />
          :
          <div>{questions}</div>
      }
    </div>
  );
}