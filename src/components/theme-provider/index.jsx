import ThemeProvider from "./context/ThemeProvider";
import ThemeConsumer from "./components/ThemeConsumer";

const Theme = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  );
};

export default Theme;
