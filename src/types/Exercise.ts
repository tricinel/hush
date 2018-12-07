import { IBreath } from './Breath';

export interface IExercise {
  id: string;
  title: string;
  description: string;
  breaths: IBreath[];
  repeat: number;
}
