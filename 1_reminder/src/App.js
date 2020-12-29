import React, { useState } from 'react';
import getData from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(getData);

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear State</button>
    </section>
  </main>;
  
}

export default App;
