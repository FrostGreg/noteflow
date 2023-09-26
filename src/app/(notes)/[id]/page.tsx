import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/app/components/Note";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Can use service since it's a server component
import { readNoteData, readNotesIds } from "@/utils/service";

const MarkdownImage = dynamic(() => import("@/app/components/MarkdownImage"));
const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  const noteIDs = readNotesIds();
  const temp = noteIDs.map((id) => ({
    id,
  }));
  return temp;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, content } = readNoteData(params.id);
  return (
    <Note data={data} content={content}>
      <Suspense fallback={<>Loading..</>}>
        <MDXRemote source={content} components={components} />
      </Suspense>
    </Note>
  );
};

export default Page;
