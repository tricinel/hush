import React, { Component } from 'react';
import { IBreath } from '../types/Breath';

interface ITimerProps {
  breathSet: IBreath[];
  repeat: number;
  children: (breath: IBreath, done: boolean) => JSX.Element;
}

interface ITimerState {
  breath: IBreath;
  done: boolean;
}

class Timer extends Component<ITimerProps, ITimerState> {
  public state = {
    breath: null,
    done: true
  };

  public render() {
    return this.props.children(this.state.breath, this.state.done);
  }
}

export default Timer;
