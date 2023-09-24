import { Draw } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => (
  <AppBar position="absolute" color="transparent">
    <Toolbar>
      <Link href="../">
        <Draw color="primary" sx={{ marginRight: "1.5rem" }} />
      </Link>
      <Box
        sx={{
          borderLeft: "1px solid",
          borderColor: "text.primary",
          paddingLeft: "1rem",
        }}
      >
        <Typography variant="h5" fontSize={20} sx={{ flexGrow: 1 }}>
          NoteFlow
        </Typography>
        <Typography variant="h5" fontSize={16}>
          Capture-Create-Connect
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
