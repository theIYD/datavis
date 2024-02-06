import { useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import { useDataStore } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components";
import EditChart from "./components/Charts/EditChart";

function App() {
  const { saveCharts, charts } = useDataStore((state) => ({
    saveCharts: state.saveCharts,
    charts: state.charts,
  }));
  const initialiseChartsData = () => {
    const savedData = localStorage.getItem("saved");
    if (savedData) {
      saveCharts(JSON.parse(savedData));
    } else localStorage.setItem("saved", JSON.stringify(charts));
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
      path: "/chart/:id",
      element: <EditChart />,
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
