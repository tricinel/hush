import { Component } from 'react';

interface IProgressProps {
  duration: number;
  children: (percentage: number, remaining: number) => JSX.Element;
}

interface IProgressState {
  progress: number;
}

class Progress extends Component<IProgressProps, IProgressState> {
  public state = {
    progress: 0
  };

  private animationId: number;

  public componentDidMount() {
    this.updateProgress();
  }

  public componentWillUnmount() {
    cancelAnimationFrame(this.animationId);
  }

  public render() {
    const percentage = (this.state.progress / this.props.duration) * 100;
    const remaining = this.props.duration - this.state.progress;

    return this.props.children(percentage, remaining);
  }

  private updateProgress() {
    let start = null;

    const step = timestamp => {
      start = start || timestamp;
      const progress = timestamp - start;
      this.setState({ progress });

      if (progress < this.props.duration) {
        this.animationId = requestAnimationFrame(step);
      }
    };

    this.animationId = requestAnimationFrame(step);
  }
}

export default Progress;
