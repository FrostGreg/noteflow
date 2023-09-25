import Box from "@mui/material/Box";
import { getAllPostIds, getPostData } from "../utils/posts";
import ArticleCard from "./components/ArticleCard";
import Typography from "@mui/material/Typography";
import { Search } from "@mui/icons-material";
import BlogImage from "./components/BlogImage";
import Image from "next/image";

export default function Home() {
  const postIDs = getAllPostIds();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column-reverse", "column-reverse", "row"],
          justifyContent: "space-between",
          marginBottom: "10rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            margin: "1rem 2rem 1rem 0rem",
          }}
        >
          <Box>
            <Typography variant="h3">Time to revise.</Typography>
            <Typography variant="h4" color="text.secondary">
              Find my latest notes here.
            </Typography>
          </Box>
          <Box
            display="flex"
            sx={{
              border: "1px solid",
              borderColor: "primary",
              borderRadius: "8rem",
              padding: "1.5rem",
              paddingRight: "8rem",
              marginTop: ["5rem", "5rem", "10rem"],
            }}
          >
            <Search />
            <Typography color="text.secondary">Search notes</Typography>
          </Box>
        </Box>
        <BlogImage
          unsplashPath="1aczhAYtUA0"
          boxProps={{
            width: ["100%", "100%", "50%"],
            height: ["23rem", "25rem", "35rem"],
          }}
          imageProps={{
            priority: false,
            sizes: "(max-width: 600px) 50vw, (max-width: 900px) 50vw, 50vw",
          }}
        />
      </Box>
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
    </>
  );
}
