import { useState, type JSX } from 'react';
import './App.css';
import { HomePage } from './pages/home';
import { FindPage } from './pages/find';
import { MartPage } from './pages/mart';
import { MePage } from './pages/me';

const pageComps: Record<number, JSX.Element> = [
  <HomePage />,
  <FindPage />,
  <MartPage />,
  <MePage />,
];

function App() {
  const [currentPageIdx] = useState(3);

  return (
    <>
      <div>{pageComps[currentPageIdx]}</div>
    </>
  );
}

export default App;
