import logo from "./logo.svg";

import TabList from "./components/tab-list";
import Theme from "./components/theme-provider";
import MuiTab from "./components/mui-tabs";
import MuiTabsPkg from "./components/mui-tabs-pkg";
import TabComponent from "./components/tab-list";
import AutoSuggestions from "./components/autosuggestion-typehead";
import TabForm from "./components/tab-form";
import Pagination from "./components/pagination";

function App() {
  return (
    <div className="App">
      {/* <TabList/> */}
      {/* <Theme /> */}
      {/* <MuiTab /> */}
      {/* <MuiTabsPkg /> */}
      {/* <TabComponent /> */}
      {/* <AutoSuggestions /> */}
      {/* <TabForm /> */}
      {/* <Pagination /> */}
      <AutoSuggestions />
    </div>
  );
}

export default App;
