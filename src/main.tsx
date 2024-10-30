import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from './layouts/PageHeader.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageHeader />
      <main className="min-h-screen bg-slate-100 pt-[70px] p-4">
        <App />
      </main>
    </BrowserRouter>
  </StrictMode>,
);
