import { Box, Typography } from "@mui/material";
import BlogImage from "../components/BlogImage";

const NotFound = () => (
  <>
    <Box sx={{ marginY: "4rem" }}>
      <Typography component="h1" variant="h3">
        Sorry we couldn&apos;t find the page you are looking for...
      </Typography>
      <Typography variant="h6" color="text.secondary">
        This page doesn&apos;t exist. Head back to our homepage to find what
        you&apos;re looking for.
      </Typography>
    </Box>
    <BlogImage unsplashPath="sxiSod0tyYQ" />
  </>
);

export default NotFound;
