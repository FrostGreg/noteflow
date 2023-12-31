import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NoteImage from "./components/NoteImage";
import NoteCardGrid from "./components/NoteGrid/NoteCardGrid";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column-reverse", "column-reverse", "row"],
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "1rem 2rem 1rem 0rem",
          }}
        >
          <Box>
            <Typography variant="h3">Time to revise.</Typography>
            <Typography variant="h4" color="text.secondary">
              Find my latest notes here.
            </Typography>
          </Box>
        </Box>
        <NoteImage
          unsplashPath="1aczhAYtUA0"
          boxProps={{
            width: ["100%", "100%", "50%"],
            height: ["23rem", "25rem", "35rem"],
          }}
          imageProps={{
            priority: false,
            sizes: "(max-width: 600px) 50vw, (max-width: 900px) 50vw, 50vw",
          }}
        />
      </Box>
      <NoteCardGrid />
    </>
  );
}
