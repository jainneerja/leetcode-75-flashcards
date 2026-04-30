import React from 'react';

interface State { hasError: boolean; }

export class VizErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
          <p className="text-gray-400 text-sm">Visualization unavailable</p>
        </div>
      );
    }
    return this.props.children;
  }
}
