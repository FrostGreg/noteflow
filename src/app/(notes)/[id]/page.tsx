import { compileMDX } from "next-mdx-remote/rsc";
import Note from "@/app/components/Note";
import MarkdownImage from "@/app/components/MarkdownImage";

// Can use service since it's a server component
import prisma from "../../../../lib/prisma";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  const noteIDs = await prisma.note.findMany({
    select: {
      name: true,
    },
  });
  // Convert query results to next GenerateStaticParams return type {id: string}[]
  const output = noteIDs.map((id) => ({
    id: id.name,
  }));

  return output;
}

// Ignore Invalid prop `children` supplied to `ForwardRef(Box)` error in dev it's built using SSG
const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const noteData = await prisma.note.findFirst({
    where: {
      name: params.id,
    },
  });

  if (!noteData) {
    return <></>;
  }

  const { content, ...data } = noteData;

  // Database returns escaped delimiter so must unescape them
  const formattedContent = content.replaceAll("\\n", "\n");

  const { content: compiledContent } = await compileMDX<{}>({
    source: formattedContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypePrettyCode],
        remarkPlugins: [remarkGfm],
      },
    },
    components: components,
  });

  return (
    <Note data={data} content={content}>
      {compiledContent}
    </Note>
  );
};

export default Page;
