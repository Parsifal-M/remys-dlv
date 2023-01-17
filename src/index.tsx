import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecipeCard } from './components/RecipeCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <RecipeCard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
