import { Box } from "@mui/material";
import { getAllPostIds, getPostData } from "../utils/posts";
import ArticleCard from "./components/ArticleCard";

export default function Home() {
  const postIDs = getAllPostIds();

  return (
    <Box
      display="grid"
      gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={1}
    >
      {postIDs.map((id, index) => {
        const { data } = getPostData(id);
        return <ArticleCard id={id} data={data} key={index} />;
      })}
    </Box>
  );
}
