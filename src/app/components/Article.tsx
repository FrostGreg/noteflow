import dynamic from "next/dynamic";

import BlogImage from "./BlogImage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { PostData } from "@/utils/types";
const AudioPlayback = dynamic(() => import("./AudioPlayback"));

const Article = ({
  data,
  content,
  children,
}: {
  data: PostData;
  content: string;
  children: ReactNode;
}) => {
  return (
    <Box>
      <Box sx={{ marginY: "4rem" }}>
        <Typography component="h1" variant="h3">
          {data.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {data.date} &mdash; {data.length} read
        </Typography>
      </Box>
      <BlogImage unsplashPath={data.imagePath} />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          marginY: "3rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <AudioPlayback content={content} />
        {data.chips.map((chip, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "primary.dark",
              borderRadius: "1rem",
              paddingX: "0.5rem",
            }}
          >
            {chip}
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: "6rem", fontSize: "18px" }}>{children}</Box>
    </Box>
  );
};

export default Article;
