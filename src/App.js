import logo from "./logo.svg";
import "./App.css";
import TabList from "./components/tab-list";
import Theme from "./components/theme-provider";
import MuiTab from "./components/mui-tabs";
import MuiTabsPkg from "./components/mui-tabs-pkg";
import TabComponent from "./components/tab-list";

function App() {
  return (
    <div className="App">
      {/* <TabList/> */}
      {/* <Theme /> */}
      {/* <MuiTab /> */}
      {/* <MuiTabsPkg /> */}
      <TabComponent />
    </div>
  );
}

export default App;
