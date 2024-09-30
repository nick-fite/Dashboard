import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './Page.css'
import SideBar from './Sidebar'
import ErrorPage from './components/error-page';
import Dashboard from './components/Dashboard';
import Metrics from './components/Metrics';
import Customers from './components/Customers';
import Products from './components/Products';
import Calendar from './components/Calendar';
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/dashboard",
    element: <Metrics/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/customers",
    element: <Customers/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/products",
    element: <Products/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/calendar",
    element: <Calendar/>,
    errorElement: <ErrorPage/>
  },
]);

function App() {

return (
  <div className='App'>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </div>
  )
}

export default App