import { Draw } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Fira_Code } from "next/font/google";
import Link from "next/link";

const firaCode = Fira_Code({ subsets: ["latin"] });

const Header = () => (
  <AppBar
    position="absolute"
    sx={{ backgroundColor: "rgb(var(--background-start-rgb))" }}
  >
    <Toolbar>
      <Link href="../">
        <Draw sx={{ color: "rgb(var(--link-rgb))", marginRight: "1.5rem" }} />
      </Link>
      <Box
        sx={{
          borderLeft: "1px solid rgb(var(--foreground-rgb))",
          paddingLeft: "1rem",
          color: "rgb(var(--foreground-rgb))",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          className={firaCode.className}
          sx={{ flexGrow: 1 }}
        >
          NoteFlow
        </Typography>
        <Typography className={firaCode.className}>
          Capture-Create-Connect
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
