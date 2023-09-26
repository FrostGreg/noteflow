import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import { Link, Typography } from "@mui/material";
import NextLink from "next/link";

const BackLink = () => (
  <Link
    href="/"
    component={NextLink}
    sx={{ display: "flex", width: "fit-content" }}
  >
    <KeyboardBackspace
      color="primary"
      sx={{
        marginRight: "1.5rem",
      }}
    />
    <Typography>Back to Notes</Typography>
  </Link>
);

export default BackLink;
