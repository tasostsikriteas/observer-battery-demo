export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">Observer UI</h1>
      <p className="text-lg text-center max-w-2xl mb-10">
        Real-time Consciousness-Driven Interface. <br />
        Powered by <strong>I.M.E. Theory</strong> — your awareness now drives the experience.
      </p>
      <a
        href="/"
        className="bg-white text-black px-6 py-3 rounded-2xl shadow-lg font-semibold hover:bg-gray-200 transition"
      >
        Try Live Demo
      </a>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">🔬 What is Observer UI?</h2>
        <p className="text-base text-gray-300 max-w-xl">
          Traditional interfaces respond to clicks. Observer UI responds to your actual awareness.
          Based on the equation: <code className="text-green-400">dE/dt = γ × (−dS_I/dt) × C(t)</code>, it transforms attention into UI triggers.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">💡 Use Cases</h2>
        <ul className="text-gray-300 space-y-2">
          <li>• Neurofeedback apps for ADHD and Focus</li>
          <li>• VR/AR interfaces triggered by attention</li>
          <li>• Ethical AI systems requiring human presence</li>
          <li>• Cognitive research experiments with real-time data</li>
        </ul>
      </div>

      <footer className="mt-20 text-sm text-gray-500">
        © 2025 Observer SDK · Built by OnePlusDESIGN
      </footer>
    </div>
  );
}
