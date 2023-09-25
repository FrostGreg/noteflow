import dynamic from "next/dynamic";
const Box = dynamic(() => import("@mui/material/Box"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const BlogImage = dynamic(() => import("../../components/BlogImage"));

const NotFound = () => (
  <>
    <Box sx={{ marginY: "4rem" }}>
      <Typography variant="h3">
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
