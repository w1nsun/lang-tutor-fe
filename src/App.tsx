import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SignUpForm from './pages/SignUpForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
