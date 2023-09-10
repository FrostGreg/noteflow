import { Box } from "@mui/material";
import Header from "../components/Header";
import { ReactElement } from "react";
import Footer from "../components/Footer";

const PostLayout = ({ children }: { children: ReactElement }) => (
  <>
    <Header />
    <Box sx={{ margin: "8rem" }}>{children}</Box>
    <Footer />
  </>
);

export default PostLayout;
