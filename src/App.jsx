import React from 'react';
import './App.css';
import Home from './components/Home';
import Blob from './components/Blob';

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

  return (
    <div className='full'>
      <Blob />
      <Home generateQuiz={generateQuiz} />
    </div>
  );
}