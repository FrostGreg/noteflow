import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Chip, Container, Typography } from "@mui/material";
import { Inter, Lato } from "next/font/google";
import Image from "next/image";

import { PostData } from "../../../utils/posts";

import Link from "next/link";
import AudioPlayback from "./AudioPlayback";

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
      <Link href="/" style={{ display: "flex" }}>
        <KeyboardBackspace
          sx={{
            marginRight: "1.5rem",
          }}
        />
        Back to Articles
      </Link>
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "35rem",
        }}
      >
        <Image
          src={`https://source.unsplash.com/${data.imagePath}`}
          alt="Decorative image"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "calc(12px - 3px)",
          }}
        />
      </Box>
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
