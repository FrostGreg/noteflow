import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/app/components/Note";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNoteIDs, getNoteData } from "@/utils/orch";

const MarkdownImage = dynamic(() => import("@/app/components/MarkdownImage"));

const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  const noteIDs = (await getNoteIDs()) as string[];

  return noteIDs.map((id) => {
    id;
  });
}

const Page = async ({ params }: { params: { id: string } }) => {
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
