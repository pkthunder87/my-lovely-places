import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './contexts/FakeAuthContext';
import LoaderFullPage from './ui/LoaderFullPage';
import EntryForm from './pages/appMap/EntryForm';
import EntryList from './pages/appMap/EntryList';
import Entry from './pages/appMap/Entry';

const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute'));
const Welcome = lazy(() => import('./pages/welcome/Welcome'));
const Login = lazy(() => import('./pages/login/Login'));
const Signup = lazy(() => import('./pages/signup/Signup'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const AppMap = lazy(() => import('./pages/appMap/AppMap'));
const AppEntries = lazy(() => import('./pages/appEntries/AppEntries'));
const AppFilter = lazy(() => import('./pages/appFilter/AppFilter'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
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
          <Suspense fallback={<LoaderFullPage />}>
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
                <Route index element={<Navigate replace to="map/entries" />} />

                <Route path="map" element={<AppMap />}>
                  <Route index path="entries" element={<EntryList />} />
                  <Route path="entries/:id" element={<Entry />} />
                  <Route path="form" element={<EntryForm />} />
                </Route>

                <Route path="entries" element={<AppEntries />} />
                <Route path="filter" element={<AppFilter />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
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
