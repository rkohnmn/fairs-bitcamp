import React from 'react'
import { Brain, RotateCcw } from 'lucide-react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('FAIRS ErrorBoundary caught error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0b0b] text-[#f5f3ee] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="max-w-md w-full bg-[#141414] border border-[#d7c29c]/30 rounded-lg p-8 shadow-2xl flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#d7c29c]/10 border border-[#d7c29c]/30 flex items-center justify-center mb-4">
              <Brain className="w-7 h-7 text-[#d7c29c]" />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[#d7c29c] mb-2">
              FAIRS Neural Viewer
            </h2>
            <p className="text-xs text-[#a09a92] mb-6 leading-relaxed">
              The cortical visualization encountered an unexpected graphic state. Click below to reload the 3D model with safe fallback settings.
            </p>
            <div className="flex gap-3">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 bg-[#ece6db] text-[#0b0b0b] font-bold text-xs uppercase tracking-widest rounded hover:bg-white transition-all shadow-lg flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset View</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-white/5 border border-white/10 text-white font-medium text-xs uppercase tracking-widest rounded hover:bg-white/10 transition-all"
              >
                Reload Page
              </button>
            </div>
            {this.state.error?.message && (
              <p className="mt-4 text-[10px] text-[#a09a92]/60 font-mono">
                {this.state.error.message}
              </p>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
