import { Routes, Route } from 'react-router';
import Login from '../components/login/Login';
import Navbar from '../components/Navbar';
import Charts from '../components/Charts';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> <Login />
          </>
        }
      />
      <Route path="/chart" element={<Charts />} />
    </Routes>
  );
}

export default AppRoutes;
