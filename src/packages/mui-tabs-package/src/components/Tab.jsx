import { Tab as MuiTab } from "@mui/material";

const Tab = ({ label, ...rest }) => {
  return <MuiTab label={label}  {...rest} />;
};

export default Tab;
