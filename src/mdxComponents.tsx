import { Body, H1, H2, H3, Subtitle } from "@/components/typography";

export function mdxComponents(
    dynamicComponents: any = {},
    wrapper: any = ({children = {}}) => children
  ) {
    return {
        Body,
        H1, 
        H2,
        H3, 
        Subtitle,
        ...dynamicComponents,
        wrapper
    };
}