import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    fallback: ReactNode; // Fallback UI when error occurs
    children: ReactNode; // Child components wrapped by the ErrorBoundary
}

interface ErrorBoundaryState {
    hasError: boolean; // Tracks if there's an error
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }; // Initialize state to false (no error)
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // Log the error if needed
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    // Method to reset the error state (can be triggered manually)
    resetError = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            // Render fallback UI if there is an error
            return <>{this.props.fallback}</>;
        }

        // Render child components when no error
        return this.props.children;
    }
}

export default ErrorBoundary;
