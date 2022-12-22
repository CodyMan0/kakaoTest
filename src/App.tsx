import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import KakaoRedirectHandler from './page/KakaoRedirectHandler';

function App() {
  return (
    <BrowserRouter basename="/kakaoGroupPage">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
