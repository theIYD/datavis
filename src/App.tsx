import { useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Stats from "./components/Stats";
import Charts from "./components/Charts";
import { useDataStore } from "./store";
import Jobs from "./components/Jobs";

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
    <main className="container mx-auto mb-10">
      <Header />
      <Stats />
      <Charts />
      <Jobs />
    </main>
  );
}

export default App;
