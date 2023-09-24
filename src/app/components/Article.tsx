import { Box, Chip, Container, Typography } from "@mui/material";
import { Inter, Lato } from "next/font/google";

import { PostData } from "../../utils/posts";

import AudioPlayback from "./AudioPlayback";
import BlogImage from "./BlogImage";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: "700", subsets: ["latin"] });

const Article = ({
  data,
  content,
  children,
}: {
  data: PostData;
  content: string;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Box sx={{ marginY: "4rem" }}>
        <Typography variant="h3" component="h1" className={inter.className}>
          {data.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgb(var(--article-date-rgb))" }}
          className={lato.className}
        >
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
          <Chip
            label={chip}
            key={index}
            sx={{
              color: "rgb(var(--foreground-color))",
            }}
          />
        ))}
      </Box>
      <Box sx={{ marginTop: "6rem", fontSize: "18px" }}>{children}</Box>
    </Container>
  );
};

export default Article;
