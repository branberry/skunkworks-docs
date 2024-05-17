"use client";
import { usePathname } from "next/navigation";
import { Global, css } from "@emotion/react";
import { theme } from "@/theme/docs-theme";
import { ContentTransition } from "./content-transition";

interface GlobalLayoutStylesOptions {
  children: React.ReactNode;
}

const globalCSS = css`
  body {
    font-size: 16px;
    line-height: 24px;
  }

  .hidden {
    display: inherit !important;
    height: 0;
    margin: 0;
    padding: 0;
    visibility: hidden !important;
    width: 0;
  }

  .header-buffer {
    scroll-margin-top: ${theme.header.navbarScrollOffset};
  }

  ${"" /* Originally from docs-tools navbar.css */}
  img.hide-medium-and-up,
  img.show-medium-and-up {
    max-width: 100%;
  }
  .hide-medium-and-up {
    display: none !important;
  }
  .show-medium-and-up {
    display: block !important;
  }
  @media (max-width: 767px) {
    .hide-medium-and-up {
      display: block !important;
    }
    .show-medium-and-up {
      display: none !important;
    }
  }

  /* To ensure the Chatbot ModalView has precedence over the consistent-nav */
  /* In next Chatbot release, a className can be specified as a prop giving us more granular specificity */
  /* At that time, remove or improve the following lines */
  div[id^="modal-"] {
    z-index: ${theme.zIndexes.widgets} !important;
  }
`;



export const GlobalLayoutStyles = ({ children }: GlobalLayoutStylesOptions) => {
  const pathname = usePathname();
  const slug = pathname;
  console.log("slug", slug);

  return (
    <>
      <Global styles={globalCSS} />      
      <ContentTransition slug={slug}>{children}</ContentTransition>
    </>
  );
};
