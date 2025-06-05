import { useState } from 'react';

export default function Bowler() {
  const [wickets, setWickets] = useState(0);
  const [maidens, setMaidens] = useState(0);
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);

  function handleWicket() {
    const newWickets = wickets + 1;
    setWickets(newWickets);
    const newBalls = balls + 1;
    setBalls(newBalls);
  }

  function handleMaiden() {
    const newMaidens = maidens + 1;
    setMaidens(newMaidens);
    const newBalls = balls + 6;
    setBalls(newBalls);
  }

  function handleRunConcede() {
    const newRuns = runs + 2;
    setRuns(newRuns);
    const newBalls = balls + 1;
    setBalls(newBalls);
  }

  const freshSpell = () => {
    setWickets(0);
    setMaidens(0);
    setRuns(0);
    setBalls(0);
  };

  const overs = Math.floor(balls / 6);
  const remainingBalls = balls % 6;

  return (
    <div className="bowler">
      <h3>Wickets: {wickets}</h3>
      <h3>MAHMUDULLAH</h3>

      {wickets >= 5 && <p>🔥 5-Wicket Haul! Great Bowling!</p>}
      <p>
        <small>
          overs: {overs}.{remainingBalls},{' '}
        </small>
        <small>maidens: {maidens}, </small>
        <small>runs conceded: {runs}</small>
      </p>

      <button onClick={handleWicket}>Wicket</button>
      <button onClick={handleMaiden}>Maiden Over</button>
      <button onClick={handleRunConcede}>Concede Runs</button>
      <button onClick={freshSpell}>Refresh</button>
    </div>
  );
}
