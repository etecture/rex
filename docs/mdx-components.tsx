import { MdxBlockquote } from "@/components/Mdx/MdxBlockquote/MdxBlockquote";
import { MdxHr } from "@/components/Mdx/MdxHr";
import { MdxPre } from "@/components/Mdx/MdxPre/MdxPre";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: MdxPre,
    hr: MdxHr,
    blockquote: MdxBlockquote,
    ...components,
  };
}
