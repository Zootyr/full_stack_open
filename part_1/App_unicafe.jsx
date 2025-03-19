import { useState } from 'react';

const Statistics = (props) => {
  const good = props.stats[0]
  const neutral = props.stats[1]
  const bad = props.stats[2]
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <h1>Statistics</h1>
      <p> Good {good} </p>
      <p> Neutral {neutral} </p>
      <p> Bad {bad} </p>
      <p> All {total} </p>
      <p> Average {average} </p>
      <p> Positive {positive} % </p>
    </div>
  );
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = [good, neutral, bad]



  return (
    <div>
      <h1> Give feedback </h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics stats = {stats}/>

    </div>
  );
};
export default App;
