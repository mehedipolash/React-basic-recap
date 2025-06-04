import { useState } from 'react';

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);

  function handleSingle() {
    const newRun = runs + 1;
    setRuns(newRun);
  }
  function handleFours() {
    const newRun = runs + 4;
    setRuns(newRun);
    const updatedFours = fours + 1;
    setFours(updatedFours);
  }
  const handleSix = () => {
    const newRun = runs + 6;
    setRuns(newRun);
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
  };
  const freshInnigs = () => {
    setRuns(0);
  };

  return (
    <div className="batsman">
      <h3>Runs: {runs}</h3>
      <h3>TAMIM IQBAL</h3>

      {runs >= 50 && <p>Congratulations for 50!</p>}

      <p>
        <small>fours: {fours} , </small>
        <small>sixes: {sixes}</small>
      </p>

      <button onClick={handleSingle}>single</button>
      <button onClick={handleFours}>four</button>
      <button onClick={handleSix}>six</button>
      <button onClick={freshInnigs}>Refresh</button>
    </div>
  );
}
