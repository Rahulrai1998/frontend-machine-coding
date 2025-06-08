import React from "react";
import {
  Tab,
  TabContextProvider,
  TabPanel,
  Tabs,
} from "../../packages/mui-tabs-package/src";

const MuiTabsPkg = () => {
  return (
    <TabContextProvider defaulValue={0}>
      <Tabs>
        <Tab label="Tab 1" id={`tab-${0}`} aria-controls={`tabpanel-${0}`} />
        <Tab label="Tab 2" id={`tab-${1}`} aria-controls={`tabpanel-${1}`} />
        <Tab label="Tab 3" id={`tab-${2}`} aria-controls={`tabpanel-${2}`} />
      </Tabs>
      <TabPanel index={0}>Panel 1</TabPanel>
      <TabPanel index={1}>Panel 2</TabPanel>
      <TabPanel index={2}>Panel 3</TabPanel>
    </TabContextProvider>
  );
};

export default MuiTabsPkg;
