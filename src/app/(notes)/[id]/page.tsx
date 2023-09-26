import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/app/components/Note";
import MarkdownImage from "@/app/components/MarkdownImage";

// Can use service since it's a server component
import { readNoteData, readNotesIds } from "@/utils/service";

const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  const noteIDs = readNotesIds();
  const temp = noteIDs.map((id) => ({
    id,
  }));
  return temp;
}

// Ignore Invalid prop `children` supplied to `ForwardRef(Box)` error in dev it's built using SSG
const Page = async ({ params }: { params: { id: string } }) => {
  const { data, content } = readNoteData(params.id);
  return (
    <Note data={data} content={content}>
      <MDXRemote source={content} components={components} />
    </Note>
  );
};

export default Page;
