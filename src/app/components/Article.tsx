import { Home } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { ReactElement } from "react";

const Article = ({
  title,
  chips,
  children,
}: {
  title: string;
  chips?: string[];
  children: ReactElement;
}) => {
  const maxTitleLength = 30;

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          <Home />
        </Link>
        <Link color="inherit" href="/pages">
          Pages
        </Link>
        <Typography color="text.primary">
          {title.length > maxTitleLength
            ? title.substring(0, maxTitleLength) + "..."
            : title}
        </Typography>
      </Breadcrumbs>
      <Typography variant="h3" component="h1" sx={{ marginY: "8px" }}>
        {title}
      </Typography>
      <Divider sx={{ marginBottom: "16px" }} />
      <Box sx={{ display: "flex", gap: "1rem" }}>
        {chips && chips.map((chip, index) => <Chip label={chip} key={index} />)}
      </Box>
      <Box sx={{ marginX: "2rem" }}>{children}</Box>
    </Container>
  );
};

export default Article;
