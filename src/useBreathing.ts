import { useState, useEffect } from 'react';
import repeatGenerator from './repeatGenerator';
import { IExercise } from './types/Exercise';
import { IBreath } from './types/Breath';

interface IBreathing {
  breath: IBreath;
  done: boolean;
}

const useBreathing = (exercise: IExercise): IBreathing => {
  const [breath, setBreath] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(
    () => {
      let timeout: NodeJS.Timeout;

      const breathingGenerator = repeatGenerator(
        exercise.breaths,
        exercise.repeat
      );

      const start = (gen: IterableIterator<IBreath>) => {
        const next = gen.next();
        setBreath(next.value);
        setDone(next.done);

        if (!next.done) {
          timeout = setTimeout(() => start(gen), next.value.duration);
        }
      };

      start(breathingGenerator);

      return () => clearTimeout(timeout);
    },
    [exercise]
  );

  return { breath, done };
};

export default useBreathing;
