import React, { Component } from 'react';
import { IBreath } from '../types/Breath';
import repeatGenerator from '../repeatGenerator';

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

  private timeout: NodeJS.Timeout;

  public componentDidMount() {
    const breathingGenerator = repeatGenerator(
      this.props.breathSet,
      this.props.repeat
    );

    const start = gen => {
      const next = gen.next();
      this.setState({ breath: next.value, done: next.done });

      if (!next.done) {
        this.timeout = setTimeout(() => start(gen), next.value.duration);
      }
    };

    start(breathingGenerator);
  }

  public componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public render() {
    return this.props.children(this.state.breath, this.state.done);
  }
}

export default Timer;
