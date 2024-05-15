import type { MDXComponents } from "mdx/types";
import { Body, H1, H2, H3, Subtitle } from "@/components/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <H2 style={{ color: 'black'}}> {children} </H2>
    ),
    ...components,
  };
}
