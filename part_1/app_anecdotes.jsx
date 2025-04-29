import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.onClick}> {props.text} </button>;
};

const MaxVotes = (props) => {
  return 0
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const array1 = new Array(anecdotes.length);
  array1.fill(0)
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(array1);
  console.log(votes)
  console.log(selected)
  const handleVotes = () => {
    const copy = [
      ...votes 
    ];
    copy[selected] += 1,
    setVotes(copy);
  };

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p>{anecdotes[selected]}</p>
      <p>Has votes {votes[selected]} </p>
      <p>
        <Button
          onClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
          text="Next anecdote"
        />
        <Button
          onClick={handleVotes}
          text="Vote"
        />
      </p>
      <h1> Anecdote with most votes </h1>
      <p> {anecdotes[votes.indexOf(Math.max(...votes))]} </p>
    </div>
  );
};

export default App;
