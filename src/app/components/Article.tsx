import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import { Inter, Lato } from "next/font/google";

import Link from "next/link";
import { ReactElement } from "react";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: "700", subsets: ["latin"] });

const Article = ({
  title,
  date,
  length,
  chips,
  children,
}: {
  title: string;
  date: string;
  length: string;
  chips?: string[];
  children: ReactElement;
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
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "slategrey" }}
          className={lato.className}
        >
          {date} &mdash; {length} read
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "16px" }} />
      <Box sx={{ display: "flex", gap: "1rem" }}>
        {chips && chips.map((chip, index) => <Chip label={chip} key={index} />)}
      </Box>
      <Box sx={{ marginTop: "1rem" }}>{children}</Box>
    </Container>
  );
};

export default Article;
