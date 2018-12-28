import { useState, useEffect } from 'react';

interface IProgress {
  percentage: number;
  remaining: number;
}

const useProgress = (duration: number): IProgress => {
  const [progress, setProgress] = useState(0);

  useEffect(
    () => {
      let animationId: number;
      let start = null;

      const step = (timestamp: number) => {
        start = start || timestamp;
        const updatedProgress = timestamp - start;
        setProgress(updatedProgress);

        if (updatedProgress < duration) {
          animationId = requestAnimationFrame(step);
        }
      };

      animationId = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animationId);
    },
    [duration]
  );

  const percentage = (progress / duration) * 100;
  const remaining = duration - progress;

  return { percentage, remaining };
};

export default useProgress;
