import { Component, ErrorInfo, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface IProps {
  children: ReactNode;
}

export class ErrorBoundaryProvider extends Component<IProps> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    toast.error(error.message);
  }

  render() {
    return this.props.children;
  }
}


