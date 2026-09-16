import LoginPage from './Page/LoginPage';
import { signupAction } from './components/SignForm';
import Dashboard from "./Page/Dashboard";
import AddProduct from "./Page/AddProduct";
import Cart from "./Page/Cart";
import Payment from "./Page/Payment";
import SignupPage from './Page/SignupPage';
import { addProductAction } from "./components/AddProductForm";
import { loginAction } from "./components/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },

    {
      path: '/cart',
      element: <Cart />
    },
    {
      path:"/payment",
      element:<Payment/>
    },
    {
      path: '/user',
      children: [
        {
          path: 'login',
          element: <LoginPage />,
          action: loginAction
        },
        {
          path: 'signup',
          element: <SignupPage />,
          action: signupAction,
        },

      ]
    },
    {
      path: '/product',
      children: [
        {
          path: "AddProduct",
          element: <AddProduct />,
          action: addProductAction,
        }
      ]
    }

  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}