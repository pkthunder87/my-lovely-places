import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/FakeAuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Welcome from './pages/welcome/Welcome';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import PageNotFound from './pages/PageNotFound';
import AppMap from './pages/appMap/AppMap';
import ProtectedRoute from './pages/ProtectedRoute';
import AppLayout from './pages/AppLayout';
import AppEntries from './pages/appEntries/AppEntries';
import AppFilter from './pages/appFilter/AppFilter';
import AppForm from './pages/AppForm';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-xl">
        <ReactQueryDevtools initialIsOpen={false} />
      </div>

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="map" />} />
              <Route index path="map" element={<AppMap />} />
              <Route path="form" element={<AppForm />} />
              <Route path="entries" element={<AppEntries />} />
              <Route path="filter" element={<AppFilter />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'hsl(234, 29%, 20%)',
            color: '#fff',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
