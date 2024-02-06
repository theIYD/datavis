import { useEffect } from "react";
import "./App.css";
import { JobData } from "./mock";
import LineChart from "./components/LineChart";

function App() {
  const initialiseData = () => {
    localStorage.setItem("jobs_data", JSON.stringify(JobData));
  };

  useEffect(() => {
    initialiseData();
  }, []);

  return (
    <>
      <p className="font-extrabold">Hello world</p>
      <LineChart />
    </>
  );
}

export default App;
