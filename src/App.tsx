import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="header">
        <div className="logo-placeholder">
          [UCSC Baskin Logo]
        </div>
        <div className="header-text">
          <h1>Tau Beta Pi Engineering Honor Society</h1>
          <h2>CA Alpha Delta Chapter</h2>
        </div>
      </header>

      {/* Top Navigation Bar */}
      <NavBar />

      {/* Home Page Content */}
      <HomePage />
    </div>
  );
}

export default App;
