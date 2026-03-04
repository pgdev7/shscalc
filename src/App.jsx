// Core calculator component (replaced the default Vite placeholder)

import React, { useState } from 'react';

const LETTER_THRESHOLDS = [
  { letter: 'A+', value: 97 },
  { letter: 'A', value: 93 },
  { letter: 'A-', value: 90 },
  { letter: 'B+', value: 87 },
  { letter: 'B', value: 83 },
  { letter: 'B-', value: 80 },
  { letter: 'C+', value: 77 },
  { letter: 'C', value: 73 },
  { letter: 'C-', value: 70 },
  { letter: 'D+', value: 67 },
  { letter: 'D', value: 63 },
  { letter: 'D-', value: 60 },
  { letter: 'F', value: 0 }
];

function App() {
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');

  const parseGrade = (str) => {
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
  };

  const computeNeeded = (target) => {
    const q3num = parseGrade(q3);
    const q4num = parseGrade(q4);
    const current = 0.45 * q3num + 0.45 * q4num;
    // allow rounding up the final course average: target - 0.5
    const needed = (target - 0.5 - current) / 0.10;
    const rounded = Math.ceil(needed);
    if (rounded > 100) return '😭';
    if (rounded < 0) return '0';
    return rounded.toString();
  };

  return (
    <div className="container">
      <div className="container-inner">
        <h1>Final Grade</h1>

        <div className="input-group">
          <input
            type="number"
            placeholder="Q3"
            value={q3}
            onChange={(e) => setQ3(e.target.value)}
            min="0"
            max="100"
            step="0.1"
          />
          <input
            type="number"
            placeholder="Q4"
            value={q4}
            onChange={(e) => setQ4(e.target.value)}
            min="0"
            max="100"
            step="0.1"
            style={{ marginLeft: '1rem' }}
          />
        </div>

        <table className="grade-table thin">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Need</th>
            </tr>
          </thead>
          <tbody>
            {LETTER_THRESHOLDS.map(({ letter, value }) => (
              <tr key={letter}>
                <td>{letter}</td>
                <td>{letter === 'F' ? computeNeeded(60.5) : computeNeeded(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;