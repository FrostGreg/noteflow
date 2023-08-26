import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder,
} from "@mui/icons-material";
import {
  Avatar,
  Typography,
  Divider,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";

import ProfilePic from "../../../public/avatar.png";
import Image from "next/image";

const ProfileCard = () => (
  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    <Box
      sx={{
        width: [1, 1, 0.5],
        display: ["flex", null, "block"],
        alignItems: "center",
        marginY: "32px",
      }}
    >
      <Box
        sx={{
          marginY: "32px",
          maxWidth: "11rem",
          minWidth: "8rem",
          aspectRatio: "1 / 1",
        }}
      >
        <Avatar sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <Image
            src={ProfilePic}
            alt="Profile picture of the author"
            fill
            style={{ objectFit: "cover" }}
          />
        </Avatar>
      </Box>
      <Box>
        <Typography variant="h5">Greg Frost</Typography>
        <Typography sx={{ marginY: "8px" }}>
          Hey, I&apos;m Greg Frost – a storyteller merging imagination with
          reality. With literature roots and an adventure-driven spirit, I dive
          into intricate human experiences.
        </Typography>
        <Divider sx={{ marginY: "8px" }} />
        <ButtonGroup size="small">
          <Button>{true ? <BookmarkBorder /> : <Bookmark />}</Button>
          <Button>{true ? <FavoriteBorder /> : <Favorite />}</Button>
          <Button>{true ? <StarBorder /> : <Star />}</Button>
        </ButtonGroup>
      </Box>
    </Box>
  </Box>
);

export default ProfileCard;
