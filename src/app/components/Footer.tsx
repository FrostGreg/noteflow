import { OpenInNew } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { List, ListItem } from "./List";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        borderTop: "2px solid grey",
        paddingX: ["1.5rem", "2rem", "4rem"],
        paddingY: ["2rem", "2rem", "3rem"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: ["100%", "70%"],
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <Box>
          <Typography variant="h5">NoteFlows</Typography>
          <Typography variant="h5" fontSize={16}>
            Capture-Create-Connect
          </Typography>
        </Box>
        <Typography>
          All rights reserved © Gregory Frost {new Date().getFullYear()}
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: ["100%", "40%"],
        }}
      >
        <Grid item xs={4} sm={6}>
          <Typography variant="h6">Contact</Typography>
          <Link
            component={NextLink}
            href="mailto:frost.computing21@gmail.com"
            sx={{ marginLeft: "1rem" }}
          >
            Email me
          </Link>
        </Grid>
        <Grid item xs={4} sm={6}>
          <Typography variant="h6">Sitemap</Typography>
          <List boxProps={{ margin: "0rem 1rem", padding: "0rem" }}>
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
        <Grid item xs={4} sm={6}>
          <Typography variant="h6" sx={{ textWrap: "nowrap" }}>
            Other Sites
          </Typography>
          <Link
            component={NextLink}
            href="https://greg-frost-portfolio.vercel.app/"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            Portfolio{" "}
            {<OpenInNew fontSize="small" sx={{ paddingLeft: "0.3rem" }} />}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
