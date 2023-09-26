import { OpenInNew } from "@mui/icons-material";
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
          All rights reserved © Gregory Frost {new Date().getFullYear()}
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
              <Link
                component={NextLink}
                href="mailto:frost.computing21@gmail.com"
              >
                Email me
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h6">Other Sites</Typography>
          <List>
            <ListItem>
              <Link
                component={NextLink}
                href="https://greg-frost-portfolio.vercel.app/"
                target="_blank"
                style={{ display: "flex", alignItems: "center" }}
              >
                Portfolio{" "}
                {<OpenInNew fontSize="small" sx={{ paddingLeft: "0.3rem" }} />}
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
            <Link component={NextLink} href="/about">
              About
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
