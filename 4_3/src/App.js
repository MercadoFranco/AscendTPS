import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import './App.css';

import BaseLayout from './layouts/BaseLayout';

import AboutMePage from './pages/AboutMePage';
import DetailPage from './pages/DetailPage';
import UserPage from './pages/UserPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route
          path="user"
          element={
            <UserPage />
          }
        />,
        <Route
          path="aboutMe"
          element={
            <AboutMePage />
          }
        />,
        <Route
          path="detail/:id"
          element={
            <DetailPage/>
          }
        />
        <Route
          path="*"
          element={
            <Navigate to="/user" replace />
          }
        />

      </Route>
    )
  )

  return (
    <div className="App">
      <div className="App-header">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
