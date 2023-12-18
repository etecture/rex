import type { MDXComponents } from "mdx/types";

import { MdxBlockquote } from "@/components/Mdx/MdxBlockquote/MdxBlockquote";
import { MdxHr } from "@/components/Mdx/MdxHr";
import { MdxPre } from "@/components/Mdx/MdxPre/MdxPre";
import { MdxTitleH1 } from "@/components/Mdx/MdxTitle/MdxTitleH1";
import { MdxTitleH2 } from "@/components/Mdx/MdxTitle/MdxTitleH2";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: MdxPre,
    hr: MdxHr,
    blockquote: MdxBlockquote,
    h1: MdxTitleH1,
    h2: MdxTitleH2,
    ...components,
  } as MDXComponents;
}
