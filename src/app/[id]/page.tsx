import { getAllPostIds, getPostData } from "../../utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
// import ProfileCard from "@/app/components/ProfileCard";
import Article from "@/app/components/Article";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const MarkdownImage = dynamic(() => import("@/app/components/MarkdownImage"));

const components = { MarkdownImage };

const Page = ({ params }: { params: { id: string } }) => {
  const validPostIds = getAllPostIds();

  if (!validPostIds.includes(params.id)) {
    notFound();
  }

  const { data, content } = getPostData(params.id);

  return (
    <Article data={data} content={content}>
      <Suspense fallback={<>Loading..</>}>
        <MDXRemote source={content} components={components} />
      </Suspense>
    </Article>
  );
};

export default Page;
