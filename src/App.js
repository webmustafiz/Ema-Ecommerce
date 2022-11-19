import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import Inventory from './Componants/Inventory/Inventory';
import Order from './Componants/Orders/Order';
import Shop from './Componants/Shop/Shop';
import Main from './Layout/Main';
import { ProductAndCardLoaders } from './Loaders/ProductAndCardLoaders';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element:<Shop></Shop>
        },
        {
          path: '/order',
          loader: ProductAndCardLoaders,
          element:<Order></Order>
        },
        {
          path: '/inventory',
          element:<Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
        

      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
