import { Typography } from "@mui/material";
import BlogImage from "../components/BlogImage";

const NotFound = () => (
  <>
    <Typography component="h1" variant="h3" sx={{ marginY: "1rem" }}>
      Sorry we couldn&apos;t find the page you are looking for...
    </Typography>
    <Typography
      component="h2"
      variant="h5"
      sx={{
        color: "rgb(var(--article-date-rgb))",
        paddingLeft: "0.5rem",
        marginBottom: "4rem",
      }}
    >
      This page doesn&apos;t exist. Head back to our homepage to find what
      you&apos;re looking for.
    </Typography>
    <BlogImage unsplashPath="sxiSod0tyYQ" />
  </>
);

export default NotFound;
