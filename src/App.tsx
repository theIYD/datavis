import { useEffect } from "react";
import "./App.css";
import { JobData } from "./mock";
import Header from "./components/ui/Header";
import Stats from "./components/Stats";

function App() {
  const initialiseData = () => {
    localStorage.setItem("jobs_data", JSON.stringify(JobData));
  };

  useEffect(() => {
    initialiseData();
  }, []);

  return (
    <main className="container mx-auto">
      <Header />
      <Stats />
    </main>
  );
}

export default App;
