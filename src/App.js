import "./App.css";
import CountWithErrorBoundary from "./CountWithErrorBoundary";
import CountWithoutErrorBoundary from "./CountWithoutErrorBoundary";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CountWithErrorBoundary />
      </ErrorBoundary>
      <CountWithoutErrorBoundary />
    </div>
  );
}

export default App;
