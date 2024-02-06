import Charts from "./Charts";
import Jobs from "./Jobs";
import Stats from "./Stats";
import Header from "./ui/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Stats />
      <Charts />
      <Jobs />
    </>
  );
}
