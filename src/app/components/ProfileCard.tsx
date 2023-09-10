import {
  Bookmark,
  BookmarkBorder,
  Done,
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
  Badge,
  Tooltip,
} from "@mui/material";

import ProfilePic from "../../../public/avatar.png";
import Image from "next/image";

const ProfileCard = ({ author }: { author: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "sticky",
        top: "2rem",
      }}
    >
      <Box
        sx={{
          width: [1, 1, 0.5],
          display: ["flex", null, "block"],
          alignItems: "center",
          marginY: "32px",
        }}
      >
        <Badge
          badgeContent={
            <Tooltip title="NoteFlow Owner">
              <Done />
            </Tooltip>
          }
          color="primary"
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            marginY: "32px",
            width: "clamp(8rem, 100%, 11rem)",
            aspectRatio: "1 / 1",
            "& .MuiBadge-badge": {
              width: "25%",
              height: "25%",
              borderRadius: "50%",
              border: "3px solid white",
            },
          }}
        >
          <Avatar sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
            {ProfilePic ? (
              <Image
                src={ProfilePic}
                alt="Profile picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              author.split(" ").map((name) => name.at(0)?.toUpperCase())
            )}
          </Avatar>
        </Badge>
        <Box>
          <Typography variant="h5">{author}</Typography>
          <Typography sx={{ marginY: "8px" }}>
            Hey, I&apos;m Greg Frost – a storyteller merging imagination with
            reality. With literature roots and an adventure-driven spirit, I
            dive into intricate human experiences.
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
};

export default ProfileCard;
