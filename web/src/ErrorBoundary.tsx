import {
  Component,
  ErrorInfo,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from 'react';

import { Logger } from 'logger';

interface Props {
  children?: ReactChild | ReactFragment | ReactPortal;
}

interface State {
  hasError?: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (): State => {
    return { hasError: true };
  };

  componentDidCatch = (error: Error, errorInfo: ErrorInfo): void =>
    Logger.warn(`${error} ${errorInfo}`);

  // eslint-disable-next-line
  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <h3>Something went wrong.</h3>;
    }

    return children;
  }
}

export default ErrorBoundary;
