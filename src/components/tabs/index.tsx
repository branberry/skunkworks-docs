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

export const Tabs = ({ children}: {children: any }) => {
    const [selected, setSelected] = useState(0);
    return (
        <LeafyTabs
            aria-label={`Tabs to describe usage of tabsetName`}
            className={cx(defaultTabsStyling)}
            setSelected={setSelected}
            selected={selected}
        > 
        {children.map((child: any)=> Tab(child.props.name, child.props.tabid, child.props.children))}
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



