import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/app/components/Note";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNoteData } from "@/utils/orch";
import { readNotesIds } from "@/utils/service";

const MarkdownImage = dynamic(() => import("@/app/components/MarkdownImage"));
const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  // uses service not fetch since it's run on the server
  const noteIDs = readNotesIds();
  return noteIDs.map((id) => {
    id;
  });
}

const Page = async ({ params }: { params: { id: string } }) => {
  //
  const { data, content } = await getNoteData(params.id);
  return (
    <Note data={data} content={content}>
      <Suspense fallback={<>Loading..</>}>
        <MDXRemote source={content} components={components} />
      </Suspense>
    </Note>
  );
};

export default Page;
