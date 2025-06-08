import { Tabs as MuiTabs } from "@mui/material";
import { useTabContext } from "../context/TabContext";

const Tabs = ({ children }) => {
  const { value, handleTabChange } = useTabContext();

  const onChange = (event, newValue) => {
    handleTabChange(newValue);
  };

  return (
    <MuiTabs value={value} onChange={onChange} aria-label="mui tab list">
      {children}
    </MuiTabs>
  );
};

export default Tabs;
