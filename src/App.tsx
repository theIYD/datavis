import { useEffect } from "react";
import "./App.css";
import { JobData } from "./mock";
import Charts from "./components/Charts";

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
      <Charts data={JobData} />
    </>
  );
}

export default App;
