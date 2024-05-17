import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { theme } from "@/theme/docs-theme";

interface ContentTransitionProps {
  children: React.ReactNode;
  slug: string;
}

const fadeOut = css`
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity ${theme.transitionSpeed.contentFade};
  }
`;

const fadeIn = css`
  .fade-enter {
    // Set height to 0 to prevent content from jumping
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    // Add delay so that fade in transition doesn't begin until the previous page has finished fading out
    transition: opacity ${theme.transitionSpeed.contentFade} ease-in-out;
  }
`;

const fadeInOut = css`
  ${fadeOut}
  ${fadeIn}
`;


export const ContentTransition = ({
  children,
  slug,
}: ContentTransitionProps) => (
  <>
    {children}
  </>
);
