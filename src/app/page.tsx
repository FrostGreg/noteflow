import Link from "next/link";
import Header from "./components/Header";
import { Description } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ height: "100vh" }}>
        <Link href="/pages">
          <Description />
        </Link>
      </Box>
    </>
  );
}
