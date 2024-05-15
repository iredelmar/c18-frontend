import { BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import NavBar from './components/navbar/Navbar'
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
            <NavBar/>
            <Login />
        </div>
      </BrowserRouter>
    </>
  );


export default App;
