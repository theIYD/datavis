import { useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import { useDataStore } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components";

function App() {
  const saveCharts = useDataStore((state) => state.saveCharts);
  const initialiseChartsData = () => {
    const savedData = localStorage.getItem("saved");
    if (savedData) {
      saveCharts(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    initialiseChartsData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/chart",
      element: <p>Chart page</p>,
    },
  ]);

  return (
    <main className="container mx-auto mb-10">
      <Header />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
