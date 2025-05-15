
import { useState, useEffect } from 'react';

export function useObserver({ alpha = 0.8, gamma = 0.2, p300 = 0 }) {
  const [charge, setCharge] = useState(0);
  const [Ct, setCt] = useState(1);
  const [triggered, setTriggered] = useState(false);

  const alpha0 = 0.8;
  const w1 = 1.2, w2 = 1.5, w3 = 2.0;
  const dt = 0.1;
  const decay = 0.01;
  const threshold = 5;

  useEffect(() => {
    const Ct_new = 1 + w1 * (1 - alpha / alpha0) + w2 * gamma + w3 * p300;
    setCt(Ct_new);

    setCharge(prev => {
      const updated = prev * (1 - decay) + Ct_new * dt;
      setTriggered(updated > threshold);
      return updated;
    });
  }, [alpha, gamma, p300]);

  return { Ct, charge, triggered };
}
