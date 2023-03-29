import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  RootLayout from './components/RootLayout';
import Main from "./routes/Main";
import ContentList from './routes/ContentList';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:  '/',
        element: <Main />
      },
      {
        path: "stock",
        element: <ContentList />,

      }
    ]
  }
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
