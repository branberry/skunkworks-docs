"use client"
import React, { useCallback, createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import { Tabs as LeafyTabs, Tab as LeafyTab } from '@leafygreen-ui/tabs';
import { theme } from "../../theme/docs-theme";
import Paragraph from "@/components/paragraph";
import { isBrowser } from "../../utils/is-browser";

const TAB_BUTTON_SELECTOR = 'button[role="tab"]';

// const getTabId = (node) => getNestedValue(['options', 'tabid'], node);

// Name anonymous tabsets by alphabetizing their tabids and concatenating with a forward slash
// const generateAnonymousTabsetName = (tabIds) => [...tabIds].sort().join('/');


// const getPosition = (element: any) => {
//     if (!isBrowser || !element) return { x: 0, y: 0 };
//     const { x, y } = element.getBoundingClientRect();
//     return { x, y };
//   };
  
  const defaultTabsStyling = css`
    ${TAB_BUTTON_SELECTOR} {
      font-size: ${theme.size.default};
      align-items: center;
    }
  
    @media ${theme.screenSize.upTo2XLarge} {
      ${TAB_BUTTON_SELECTOR} {
        overflow: initial;
        max-width: initial;
        text-overflow: initial;
      }
    }
  `;
  
//   const hiddenTabsStyling = css`
//     & > div:first-of-type {
//       display: none;
//     }
//   `;
  
//   const landingTabsStyling = css`
//     & > div:first-of-type {
//       margin-top: ${theme.size.medium};
//       margin-bottom: ${theme.size.large};
  
//       ${TAB_BUTTON_SELECTOR} {
//         display: block;
//         flex-grow: 1;
//       }
//     }
//   `;



// const getTabsStyling = ({ isHidden = false, isProductLanding = false }) => css`
//     ${defaultTabsStyling};
//     `;


// const landingTabStyling = css`
//   display: grid;
//   column-gap: ${theme.size.medium};
//   grid-template-columns: repeat(2, 1fr);
//   margin-top: unset !important;

//   img {
//     border-radius: ${theme.size.small};
//     grid-column: 2;
//     margin-top: 0px;
//     display: block;
//   }

//   @media ${theme.screenSize.upToLarge} {
//     display: block;
//   }
// `;

// const getTabStyling = ({ isProductLanding }) => css`
//   ${isProductLanding && landingTabStyling}
//   margin-top: 24px;
// `;



// const Tabs = ({ children }) => {
//     // const { activeTabs, selectors, setActiveTab } = useContext(TabContext);
//     // const tabIds = children.map((child) => getTabId(child));
//     // const tabsetName = options.tabset || generateAnonymousTabsetName(tabIds);
//     // const [activeTab, setActiveTabIndex] = useState(() => {
//     //   // activeTabIdx at build time should be -1 if tabsetName !== drivers
//     //   // since no local storage to read, and no default tabs
//     //   const activeTabIdx = tabIds.indexOf(activeTabs?.[tabsetName]);
//     //   return activeTabIdx > -1 ? activeTabIdx : 0;
//     // });
  
//     const scrollAnchorRef = useRef();
//     // Hide tabset if it includes the :hidden: option, or if it is controlled by a dropdown selector
//     // const isHidden = options.hidden || Object.keys(selectors).includes(tabsetName);
//     // const isProductLanding = page?.options?.template === 'product-landing';
  
//     // useEffect(() => {
//     //   const index = tabIds.indexOf(activeTabs[tabsetName]);
//     //   if (index !== -1) {
//     //     setActiveTabIndex(index);
//     //   }
//     // }, [activeTabs, tabIds, tabsetName]);
  
//     const handleClick = useCallback(
//       () => {
//         // const tabId = tabIds[index];
//         const priorAnchorOffset = getPosition(scrollAnchorRef.current).y;
  
//         // setActiveTab({
//         //   name: 'tabsetName',
//         // //   value: tabId,
//         // });
//         // reportAnalytics('Tab Selected', {
//         //   tabId,
//         //   tabSet: tabsetName,
//         // });
  
//         // Delay preserving scroll behavior by 40ms to allow other tabset content bodies to render
//         window.setTimeout(() => {
//           window.scrollTo(0, getPosition(scrollAnchorRef.current).y + window.scrollY - priorAnchorOffset);
//         }, 40);
//       },
//       [] // eslint-disable-line react-hooks/exhaustive-deps
//     );
  
//     return (
//       <>
//         <div ref={scrollAnchorRef} aria-hidden="true"></div>
//           <LeafyTabs
//             className={cx(getTabsStyling({ }))}
//             aria-label={`Tabs to describe usage of tabsetName`}
//             // selected={activeTab}
//             setSelected={handleClick}
//           >
//             {children.map((tab) => {
//               if (tab.name !== 'tab') {
//                 return null;
//               }
  
//             //   const tabId = getTabId(tab);
//               const tabTitle = "Tab1";
//                 // tab.argument.length > 0
//                 //   ? tab.argument.map((arg, i) => <ComponentFactory {...rest} key={`${tabId}-arg-${i}`} nodeData={arg} />)
//                 //   : tabId;
  
//               return (
//                 <LeafyTab className={cx(getTabStyling({ isProductLanding }))} key={tabId} name={tabTitle}>
//                   {tab.children.map((child, i) => (
//                     <ComponentFactory {...rest} key={`${tabId}-${i}`} nodeData={child} />
//                   ))}
//                 </LeafyTab>
//               );
//             })}
//           </LeafyTabs>
//       </>
//     );
//   };


export const Tabs = ({ children}: {children: any }) => {
    const [selected, setSelected] = useState(0);
    return (
        <LeafyTabs
            aria-label={`Tabs to describe usage of tabsetName`}
            className={cx(defaultTabsStyling)}
            setSelected={setSelected}
            selected={selected}
        > 
        {children.map((child)=> Tab(child.props.name, child.props.tabid, child.props.children))}
        </LeafyTabs>
    );
}

export const Tab = ( name: string, tabid: string, children: any) => {
    return (
    <LeafyTab key={tabid} name= {name} >
        <Paragraph>{children}</Paragraph>
     </LeafyTab>
    );
}




// export const Tabs = ({children}) => {
//     const [selected, setSelected] = useState(0);
//     console.log(children);
//     return (
//     <div className={cx(defaultTabsStyling)}>
//             <LeafyTabs
//                 aria-label="demo tabs"
//                 setSelected={setSelected}
//                 selected={selected}
//             >
//                 {children}
//                 <LeafyTab name= "overview" default = {true}> <Paragraph>Overview </Paragraph></LeafyTab>
//                 <LeafyTab name="Tab One">
//                 <Paragraph>Tab Content One</Paragraph>
//                 </LeafyTab>
//                 <LeafyTab name="Tab Two">
//                 <Paragraph>Tab Content Two</Paragraph>
//                 </LeafyTab>
//                 <LeafyTab name="Tab Three">
//                 <Paragraph>Tab Content Three</Paragraph>
//                 </LeafyTab>
//             </LeafyTabs>
//             </div>
//     );
// };

export {LeafyTabs, LeafyTab};
