import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/FakeAuthContext';

import Welcome from './pages/welcome/Welcome';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import PageNotFound from './pages/PageNotFound';
import AppMap from './pages/appMap/AppMap';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/appmap" element={<AppMap />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
