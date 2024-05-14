"use client"
import React, { createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { theme } from '../../theme/docs-theme';

type BannerContent = {
    url: string;
    altText: string;
    imgPath: string;
    mobileImgPath: string;
}

interface HeaderContextOptions {
    bannerContent: null | BannerContent;
    setBannerContent: Dispatch<SetStateAction<BannerContent | null>>;
    totalHeaderHeight: string
}

interface HeaderContextProviderProps {
    children: React.ReactNode;
}

const defaultValue: HeaderContextOptions = {
    bannerContent: null,
    setBannerContent: () => {},
    totalHeaderHeight: theme.header.navbarHeight,
};

export const HeaderContext = createContext<HeaderContextOptions>(defaultValue);

export const HeaderContextProvider = ({ children }: HeaderContextProviderProps) => {
  const [bannerContent, setBannerContent] = useState<BannerContent | null>(null);
  const [totalHeaderHeight, setTotalHeaderHeight] = useState(theme.header.navbarHeight);

  useEffect(() => {
    const totalHeight = `calc(
      ${bannerContent != null ? `${theme.header.bannerHeight} +` : ''}
      ${theme.header.navbarHeight}
    )`;
    setTotalHeaderHeight(totalHeight);
  }, [bannerContent, setTotalHeaderHeight]);

  return (
    <HeaderContext.Provider value={{ bannerContent, setBannerContent, totalHeaderHeight }}>
      {children}
    </HeaderContext.Provider>
  );
};

