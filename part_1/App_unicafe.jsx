import { useState } from 'react';

const Statistics = (props) => {
  const good = props.stats[0];
  const neutral = props.stats[1];
  const bad = props.stats[2];
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100 + "%";
  if (total == 0) {
    return <div> No feedback given </div>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine name = "Good" value = {good} />
      <StatisticsLine name = "Neutral" value = {neutral} />
      <StatisticsLine name = "Bad" value = {bad} />
      <StatisticsLine name = "All" value = {total} />
      <StatisticsLine name = "Average" value = {average} />
      <StatisticsLine name = "Positive" value = {positive} />
    </div>
  );
};

const Button = (props) => {
  return (
  <button onClick={props.onClick}> {props.text} </button>
)
}

const StatisticsLine = (props) => {
  return (
    <div>
    <p>
      {props.name} {props.value}
    </p>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = [good, neutral, bad];

  return (
    <div>
      <h1> Give feedback </h1>
      <div>
      <Button onClick={() => setGood(good + 1)} text = "good" />
      <Button onClick={() => setNeutral(neutral + 1)} text = "neutral" />
      <Button onClick={() => setBad(bad + 1)} text = "bad"/>
      </div>
      <Statistics stats={stats} />
    </div>
  );
};
export default App;
