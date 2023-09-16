import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { Fira_Code } from "next/font/google";
import Link from "next/link";

const firaCode = Fira_Code({ subsets: ["latin"] });

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
          <Typography className={firaCode.className} variant="h5">
            NoteFlow
          </Typography>
          <Typography className={firaCode.className}>
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
              <Link href="/">Email us</Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h6">General</Typography>
          <List>
            <ListItem>
              <Link href="/">Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Code of Conduct</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Terms of Use</Link>
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid>
        <Typography variant="h6">Sitemap</Typography>
        <List>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/">Pages</Link>
          </ListItem>
          <ListItem>
            <Link href="/">Login</Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
