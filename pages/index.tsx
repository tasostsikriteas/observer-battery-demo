
import { useState } from 'react';
import { useObserver } from '../utils/useObserver';
import { IfPresent } from '../components/IfPresent';

export default function Home() {
  const [alpha, setAlpha] = useState(0.8);
  const [gamma, setGamma] = useState(0.2);
  const [p300, setP300] = useState(0);

  const { Ct, charge, triggered } = useObserver({ alpha, gamma, p300 });

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Observer UI Demo</h1>
      <div className="mb-4">C(t): {Ct.toFixed(2)} | Charge: {charge.toFixed(2)} | Triggered: {triggered ? 'Yes' : 'No'}</div>

      <div className="space-y-2">
        <div>
          <label>Alpha: {alpha}</label>
          <input type="range" min="0" max="1" step="0.01" value={alpha} onChange={e => setAlpha(parseFloat(e.target.value))} />
        </div>
        <div>
          <label>Gamma: {gamma}</label>
          <input type="range" min="0" max="1" step="0.01" value={gamma} onChange={e => setGamma(parseFloat(e.target.value))} />
        </div>
        <div>
          <button onClick={() => setP300(p => p + 1)} className="bg-blue-500 text-white px-3 py-1">P300 Trigger</button>
        </div>
      </div>

      <IfPresent active={triggered}>
        <div className="mt-6 p-4 bg-green-200 rounded">⚡ Consciousness Triggered UI</div>
      </IfPresent>
    </div>
  );
}
