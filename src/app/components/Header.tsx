import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar
    position="static"
    color="default"
    sx={{ marginBottom: [null, null, "2rem"] }}
  >
    <Toolbar>
      <Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NoteFlow
        </Typography>
        <Typography>Capture-Create-Connect</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
