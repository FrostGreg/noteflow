import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { OpenInNew } from "@mui/icons-material";
import { List, ListItem } from "@/app/components/List";

const AboutPage = () => (
  <>
    <Box sx={{ marginY: "4rem" }}>
      <Typography variant="h2">About Noteflows</Typography>
      <Typography variant="h6" color="text.secondary">
        26th September, 2023
      </Typography>
    </Box>

    <Typography>
      This is Noteflows, a place where I can document my university notes or
      anything else I want to track without having to sign in and can be
      accessed anywhere with an internet connection. Over the last year I have
      read quite a lot of the blogs over at{" "}
      <Link component={NextLink} href="https://kentcdodds.com/">
        Kent C. Dodds
      </Link>{" "}
      so this site takes huge inspiration from there.
    </Typography>

    <Typography variant="h4" sx={{ marginTop: "3rem" }}>
      Why Noteflow exists
    </Typography>

    <List boxProps={{ margin: "1rem 2rem", padding: "0rem" }}>
      <ListItem>
        <Typography variant="h6" color="text.secondary">
          Simplified Notekeeping:
        </Typography>
        <Typography>
          Noteflows is the place where I can keep all my notes neatly organized
          , without logins, and open for anyone to read.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h6" color="text.secondary">
          Free Cloud Storage:
        </Typography>
        <Typography>
          Making use of Vercels free hobby tier means my google/onedrive is no
          longer cluttered with notes saving space for more meaningful things.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h6" color="text.secondary">
          Learning opportunity:
        </Typography>
        <Typography>
          Noteflows is the first full stack web app I have built from scratch
          and it has taught me to use some pretty cool features like static site
          generation, react lazy loading, and server side rendering
        </Typography>
      </ListItem>
    </List>

    <Typography variant="h4" sx={{ marginTop: "3rem" }}>
      Plugs <OpenInNew fontSize="small" />
    </Typography>

    <List boxProps={{ margin: "1rem 2rem", padding: "0rem" }}>
      <ListItem>
        <Link
          component={NextLink}
          href="https://greg-frost-portfolio.vercel.app/"
          target="_blank"
        >
          Portfolio
        </Link>
      </ListItem>
      <ListItem>
        <Link
          component={NextLink}
          href="https://github.com/FrostGreg"
          target="_blank"
        >
          Github
        </Link>
      </ListItem>
      <ListItem>
        <Link
          component={NextLink}
          href="https://linkedin.com/in/gregory-frost"
          target="_blank"
        >
          LinkedIn
        </Link>
      </ListItem>
    </List>
    <Typography sx={{ marginY: "4rem" }}>
      Thank you for reading if you have questions or want to get in touch? Feel
      free to{" "}
      <Link component={NextLink} href="mailto:frost.computing21@gmail.com">
        email
      </Link>{" "}
      me.
    </Typography>
  </>
);

export default AboutPage;
