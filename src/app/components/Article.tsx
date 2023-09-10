import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Chip, Container, Typography } from "@mui/material";
import { Inter, Lato } from "next/font/google";
import Image from "next/image";

import { PostData } from "../../../lib/posts";

import Link from "next/link";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: "700", subsets: ["latin"] });

const Article = ({
  data,
  children,
}: {
  data: PostData;
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
          sx={{ color: "slategrey" }}
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
          alt="random image"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "calc(12px - 3px)",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", marginY: "3rem" }}>
        {data.chips &&
          data.chips.map((chip, index) => <Chip label={chip} key={index} />)}
      </Box>
      <Box sx={{ marginTop: "1rem" }}>{children}</Box>
    </Container>
  );
};

export default Article;
