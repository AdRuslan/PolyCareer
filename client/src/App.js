import './App.scss';

import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <AuthPage />
    </div>
  );
}

export default App;
