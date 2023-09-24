import { Box, Grid, Link, List, ListItem, Typography } from "@mui/material";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
        borderTop: "2px solid grey",
        padding: "2rem",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5">NoteFlow</Typography>
          <Typography variant="h5" fontSize={16}>
            Capture-Create-Connect
          </Typography>
        </Box>
        <Typography>
          All rights reserved © Greg Frost {new Date().getFullYear()}
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">Contact</Typography>
          <List>
            <ListItem>
              <Link component={NextLink} href="/">
                Email us
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h6">General</Typography>
          <List>
            <ListItem>
              <Link component={NextLink} href="/">
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem>
              <Link component={NextLink} href="/">
                Code of Conduct
              </Link>
            </ListItem>
            <ListItem>
              <Link component={NextLink} href="/">
                Terms of Use
              </Link>
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid>
        <Typography variant="h6">Sitemap</Typography>
        <List>
          <ListItem>
            <Link component={NextLink} href="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link component={NextLink} href="/">
              Pages
            </Link>
          </ListItem>
          <ListItem>
            <Link component={NextLink} href="/">
              Login
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
