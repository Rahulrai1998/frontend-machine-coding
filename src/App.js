import logo from "./logo.svg";
import "./App.css";
import TabList from "./components/tab-list";
import Theme from "./components/theme-provider";

function App() {
  return (
    <div className="App">
      {/* <TabList/> */}
      <Theme />
    </div>
  );
}

export default App;
