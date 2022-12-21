import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';

function App() {
  return (
    <BrowserRouter basename="/kakaoGroupPage">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
