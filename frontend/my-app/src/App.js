import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './screens/Errorpage';
export const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/*",
    element: <Errorpage/>,
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider>
        <HomePage/>
      </RouterProvider>
    </div>
  );
}

export default App;
