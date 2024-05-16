import type { MDXComponents } from "mdx/types";
import { H2 } from "@/components/typography";


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <H2 style={{ color: '#000' }}> {children} </H2>
    ),
    ...components,
  };
}
