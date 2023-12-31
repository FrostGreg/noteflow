import dynamic from "next/dynamic";

import NoteImage from "./NoteImage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { NoteData } from "@/utils/types";
const AudioPlayback = dynamic(() => import("./AudioPlayback"));

const Note = ({
  data,
  content,
  children,
}: {
  data: NoteData;
  content: string;
  children: ReactNode;
}) => {
  return (
    <Box>
      <Box sx={{ marginY: "4rem" }}>
        <Typography component="h1" variant="h3">
          {data.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {new Date(data.date.toString()).toDateString()} &mdash; {data.length}{" "}
          read
        </Typography>
      </Box>
      <NoteImage unsplashPath={data.imagePath} />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          marginY: "3rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <AudioPlayback content={content} />
        {data.chips.split(",").map((chip, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "primary.dark",
              borderRadius: "1rem",
              paddingX: "0.5rem",
            }}
          >
            {chip}
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: "6rem", fontSize: "18px" }}>{children}</Box>
    </Box>
  );
};

export default Note;
