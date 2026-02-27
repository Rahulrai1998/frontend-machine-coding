import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props); //required to call the parent constructor
    this.state = { hasError: false };
  }

  //this lifecycle method runs when the child componenet gets any error
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
