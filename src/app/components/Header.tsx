import { ShapeLine } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Fira_Code } from "next/font/google";
import Link from "next/link";

const firaCode = Fira_Code({ subsets: ["latin"] });

const Header = () => (
  <AppBar
    position="static"
    color="default"
    sx={{ marginBottom: [null, null, "2rem"] }}
  >
    <Toolbar>
      <Link href="../">
        <ShapeLine sx={{ color: "darkgreen", marginRight: "1.5rem" }} />
      </Link>
      <Box sx={{ borderLeft: "1px solid black", paddingLeft: "1rem" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className={firaCode.className}
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
