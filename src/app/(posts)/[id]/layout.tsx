import { Grid } from "@mui/material";
import React from "react";
import BackLink from "../../components/BackLink";

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <Grid container sx={{ flexGrow: 1, marginTop: "6rem" }}>
    <Grid item md></Grid>
    <Grid item xs={12} sm={12} md={8}>
      <BackLink />
      {children}
    </Grid>
    <Grid item md></Grid>
  </Grid>
);

export default BlogLayout;
