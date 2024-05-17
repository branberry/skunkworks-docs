// import React, { useEffect, useReducer } from 'react';
// import { isBrowser } from '../../utils/is-browser';
// import { getLocalValue, setLocalValue } from '../../utils/browser-storage';




// const defaultContextValue = {
//     activeTabs: {},
//     selectors: {},
//     setActiveTab: () => {},
//   };
  
//   const TabContext = React.createContext(defaultContextValue);


// const reducer = (prevState: any, { name, value }) => {
//     return {
//       ...prevState,
//       [name]: value,
//     };
//   };

// const initActiveTabs = (choicesPerSelector: any, localActiveTabs: any) => {
//     // all tabbed content is read from browser local storage
//     // if there is no browser, wait for client side local storage
//     // hidden content should be handled from tab components
//     if (!isBrowser) {
//       return {};
//     }

//     const defaultRes = Object.keys(choicesPerSelector || {}).reduce((res, selectorKey) => {
//         const nodeOptionIdx = choicesPerSelector[selectorKey].findIndex((tab) => tab.value === 'nodejs');
//         // NOTE: default tabs should be specified here
//         if (selectorKey === 'drivers' && nodeOptionIdx > -1) {
//         res[selectorKey] = 'nodejs';
//         } else {
//         res[selectorKey] = choicesPerSelector[selectorKey][0].value;
//         }
//         return res;
//     }, {});

//     // get local active tabs
//     const activeTabsRes = Object.keys(localActiveTabs || {}).reduce((res, activeTabKey) => {
//         if (typeof localActiveTabs[activeTabKey] === 'string') {
//         res[activeTabKey] = localActiveTabs[activeTabKey];
//         }
//         return res;
//     }, {});

//     const initialTabs = { ...defaultRes, ...activeTabsRes };
//   setLocalValue('activeTabs', initialTabs);
//   return initialTabs;
// };


// const TabProvider = ({ children, selectors = {} }) => {
//     // convert selectors to tab options first here, then set init values
//     // selectors are determined at build time
  
//     const choicesPerSelector = Object.keys(selectors).reduce((res, selector) => {
//       res[selector] = makeChoices({
//         name: selector,
//         options: selectors[selector],
//         ...(selector === 'drivers' && { iconMapping: DRIVER_ICON_MAP }),
//       });
//       return res;
//     }, {});
  
//     const [activeTabs, setActiveTab] = useReducer(
//       reducer,
//       getLocalValue('activeTabs'),
//       initActiveTabs.bind(null, choicesPerSelector)
//     );
  
//     useEffect(() => {
//       setLocalValue('activeTabs', activeTabs);
//     }, [activeTabs]);
  
//     return (
//       <TabContext.Provider value={{ activeTabs, driverIconMap: DRIVER_ICON_MAP, selectors, setActiveTab }}>
//         {children}
//       </TabContext.Provider>
//     );
//   };
  
//   export { TabContext, TabProvider };
  