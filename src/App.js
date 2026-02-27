import logo from "./logo.svg";
import TabList from "./components/tab-list";
import Theme from "./components/theme-provider";
import MuiTab from "./components/mui-tabs";
import MuiTabsPkg from "./components/mui-tabs-pkg";
import TabComponent from "./components/tab-list";
import AutoSuggestions from "./components/autosuggestion-typehead";
import TabForm from "./components/tab-form";
import Pagination from "./components/pagination";
import ProgressBar from "./components/progressbar";
import Timer from "./components/timer";
import Dropdown from "./components/dropdown";
import { Calculator } from "./components/calculator";
import { CalculatorOptm } from "./components/calculator-optm";
import { Todo } from "./components/todo";
import PolyfillsTester from "./components/PolyfillsTester";
import GridLights from "./components/grid-lights/GridLights";
import { Accordion } from "./components/accordion";
import CarouselComp from "./components/carousel";
import CarouselOne from "./components/carousel-one";
import FetchData from "./components/api-data-fetch";
import ModalOne from "./components/modal-one";
import Dialog from "./components/modal-two";
import ErrorBoundary from "./ErrorBoundary";
import FallbackUI from "./FallbackUI";

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<FallbackUI />}>
        {/* <TabList/> */}
        {/* <Theme /> */}
        {/* <MuiTab /> */}
        {/* <MuiTabsPkg /> */}
        {/* <TabComponent /> */}
        {/* <AutoSuggestions /> */}
        {/* <TabForm /> */}
        {/* <Pagination /> */}
        {/* <AutoSuggestions /> */}
        {/* <ProgressBar /> */}
        {/* <Timer />  */}
        {/* <Dropdown /> */}
        {/* <Calculator /> */}
        {/* <CalculatorOptm /> */}
        {/* <Todo /> */}
        {/* <GridLights /> */}
        {/* <Accordion /> */}
        {/* <CarouselComp /> */}
        {/* <CarouselOne /> */}
        {/* <ModalOne /> */}
        {/* <Dialog /> */}

        {/* <FetchData /> */}

        <PolyfillsTester />
      </ErrorBoundary>
    </div>
  );
}

export default App;
