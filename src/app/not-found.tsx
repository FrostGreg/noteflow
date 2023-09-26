import BackLink from "./components/BackLink";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BlogImage from "./components/BlogImage";

const NotFound = () => (
  <>
    <Grid container sx={{ flexGrow: 1, marginTop: "6rem" }}>
      <Grid item md></Grid>
      <Grid item xs={12} sm={12} md={8}>
        <BackLink />
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
      </Grid>
      <Grid item md></Grid>
    </Grid>
  </>
);

export default NotFound;
