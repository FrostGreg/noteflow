import Box from "@mui/material/Box";
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
        return (
          // Mark first image priority for LCP optimisation
          <ArticleCard id={id} data={data} priority={index === 0} key={index} />
        );
      })}
    </Box>
  );
}
