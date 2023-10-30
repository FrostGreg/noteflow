import { Draw } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Header = () => (
  <Box
    sx={{
      display: "flex",
      paddingX: ["1.5rem", "2rem", "4rem"],
      paddingY: ["2rem", "2rem", "3rem"],
      alignItems: "center",
    }}
  >
    <Link href="/">
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
        NoteFlows
      </Typography>
      <Typography variant="h5" fontSize={16}>
        Capture-Create-Connect
      </Typography>
    </Box>
  </Box>
);

export default Header;
