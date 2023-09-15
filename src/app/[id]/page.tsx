import { Grid } from "@mui/material";
import { getAllPostIds, getPostData } from "../../../utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import ProfileCard from "@/app/components/ProfileCard";
import Article from "@/app/components/Article";
import MarkdownImage from "@/app/components/MarkdownImage";
import { Suspense } from "react";

const components = { MarkdownImage };

const Page = ({ params }: { params: { id: string } }) => {
  const validPostIds = getAllPostIds();

  if (!validPostIds.includes(params.id)) {
    return <>Oops!</>;
  }

  const { data, content } = getPostData(params.id);

  return (
    <Grid container sx={{ flexGrow: 1, marginTop: "6rem" }}>
      <Grid item md></Grid>
      <Grid item sm={12} md={8}>
        <Article data={data} content={content}>
          <Suspense fallback={<>Still loading...</>}>
            <MDXRemote source={content} components={components} />
          </Suspense>
        </Article>
      </Grid>
      <Grid item md></Grid>
    </Grid>
  );
};

export default Page;
