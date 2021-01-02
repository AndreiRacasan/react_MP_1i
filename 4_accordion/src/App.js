import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  
  const [questions, setQuestions] = useState(data);

  return <main>
    <div className="container">
      <h3>Questions and Answers</h3>
      <div className="info">
        {questions.map((q) => {
          return <SingleQuestion key={q.id} {...q} />
        })}
      </div>
    </div>
  </main>
}

export default App;
