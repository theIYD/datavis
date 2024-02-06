import { useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Stats from "./components/Stats";
import Charts from "./components/Charts";
import { useDataStore } from "./store";

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

  return (
    <main className="container mx-auto">
      <Header />
      <Stats />
      <Charts />
    </main>
  );
}

export default App;
