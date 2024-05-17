"use client";
import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { SNOOTY_REALM_APP_ID } from "../../build-constants";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { theme } from "../../theme/docs-theme";
import { isBrowser } from "../../utils/is-browser";
import { normalizePath } from "../../utils/normalize-path";
import { fetchBanner } from "../../utils/realm";

const getBannerSource = (src: string) => {
  if (src == null || src === "") return null;
  const srcUrl = `${SNOOTY_REALM_APP_ID}.mongodbstitch.com/${src}`;
  console.log(
    " `https://${normalizePath(srcUrl)}`",
    `https://${normalizePath(srcUrl)}`
  );
  return `https://${normalizePath(srcUrl)}`;
};

const StyledBannerContainer = styled.a`
  display: block;
  height: ${theme.header.bannerHeight};
  width: 100vw;
`;

const StyledBannerContent = styled.div(
  (props: { imgPath: string; mobileImgPath: string }) => `
    background-image: url(${getBannerSource(props.imgPath)});
    background-position: center;
    background-size: cover;
    height: 100%;

    @media ${theme.screenSize.upToMedium} {
      background-image: url(${getBannerSource(props.mobileImgPath)});
    }
  `
);

interface BannerContent {
  url: string;
  altText: string;
  imgPath: string;
  mobileImgPath: string;
}

interface SiteBannerProps {
  bannerContent: BannerContent;
}

const SiteBanner = ({ bannerContent }: SiteBannerProps) => {
  return (
    <StyledBannerContainer
      href={bannerContent.url}
      title={bannerContent.altText}
    >
      <StyledBannerContent
        imgPath={bannerContent.imgPath}
        mobileImgPath={bannerContent.mobileImgPath}
      />
    </StyledBannerContainer>
  );
};

export default SiteBanner;
