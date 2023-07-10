import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TareasProvider } from './context/tareas.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:tipo",
        element: <App />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <TareasProvider>
     <RouterProvider router={router} />
  </TareasProvider>,
)
