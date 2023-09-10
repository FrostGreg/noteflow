import { Grid } from "@mui/material";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import ProfileCard from "@/app/components/ProfileCard";
import Article from "@/app/components/Article";
import MarkdownImage from "@/app/components/MarkdownImage";

const components = { MarkdownImage };

const Page = ({ params }: { params: { id: string } }) => {
  const validPostIds = getAllPostIds();

  if (!validPostIds.includes(params.id)) {
    return <>Oops!</>;
  }

  const { data, content } = getPostData(params.id);

  return (
    <Grid container sx={{ flexGrow: 1, marginTop: "6rem" }}>
      <Grid md>{/* <ProfileCard author={data.author} /> */}</Grid>
      <Grid md={8}>
        <Article data={data}>
          <MDXRemote source={content} components={components} />
        </Article>
      </Grid>
      <Grid md></Grid>
    </Grid>
  );
};

export default Page;
