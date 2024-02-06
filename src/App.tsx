import { useEffect, useState } from "react";
import "./App.css";
import { JobData } from "./mock";
import Header from "./components/ui/Header";
import Stats from "./components/Stats";
import Charts from "./components/Charts";
import { Data } from "./types";

function App() {
  const [data, setData] = useState<Data[]>([]);

  const initialiseData = () => {
    const savedData = localStorage.getItem("saved");
    if (!savedData) {
      localStorage.setItem("jobs_data", JSON.stringify(JobData));
      return JobData;
    }

    return JSON.parse(savedData);
  };

  useEffect(() => {
    const data = initialiseData();
    setData(data);
  }, []);

  return (
    <main className="container mx-auto">
      <Header />
      <Stats />
      <Charts data={data} />
    </main>
  );
}

export default App;
