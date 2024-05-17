"use client"
import React from 'react';
import { css, cx } from '@leafygreen-ui/emotion';
import { Body } from '@leafygreen-ui/typography';

const paragraphStyling = css`
  margin-bottom: 16px;
`;

const Paragraph = ({children}) => {
    // For paragraph nodes that appear inside certain containers, skip <p> tags and just render their contents
    return (
      <Body className={cx(paragraphStyling)}>
        {children}
      </Body>
    );
  };

export default Paragraph;
