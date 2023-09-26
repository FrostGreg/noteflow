import { MDXRemote } from "next-mdx-remote/rsc";
import Article from "@/app/components/Article";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getPostIDs, getPostData } from "@/utils/orch";

const MarkdownImage = dynamic(() => import("@/app/components/MarkdownImage"));

const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  const postIDs = (await getPostIDs()) as string[];

  return postIDs.map((id) => {
    id;
  });
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, content } = await getPostData(params.id);
  return (
    <Article data={data} content={content}>
      <Suspense fallback={<>Loading..</>}>
        <MDXRemote source={content} components={components} />
      </Suspense>
    </Article>
  );
};

export default Page;
