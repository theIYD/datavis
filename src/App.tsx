import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components";
import EditChart from "./components/Charts/EditChart";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/chart/:id",
      element: <EditChart />,
    },
  ]);

  return (
    <main className="container mx-auto mb-10">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
