/**
 * velite s.mdx() 타입을 위한 컴포넌트
 * https://velite.js.org/guide/using-mdx
 */
import * as runtime from "react/jsx-runtime";
import { CodeBlocksWithTabs } from "@/components/code-blocks-with-tabs";
const sharedComponents = {
  // Add your global components here for MDX
  CodeBlocksWithTabs,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, components }} />;
}
