import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

const ArticleCard = ({
  id,
  data,
  priority,
}: {
  id: string;
  data: any;
  priority: boolean;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "3px solid transparent",
        padding: "0.5rem",
        "&::after": {
          content: '""',
          display: "block",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          border: "3px solid",
          borderColor: "secondary.main",
          borderRadius: "12px",
          transform: "scale(95%)",
          transition: "all 0.2s ease",
          opacity: 0,
          zIndex: -1,
        },
        "&:hover::after": {
          transform: "scale(100%)",
          opacity: 1,
        },
      }}
    >
      <Link href={`${id}`} component={NextLink} underline="none">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "35rem",
          }}
        >
          <Image
            src={`https://source.unsplash.com/${data.imagePath}`}
            alt="random image"
            fill
            priority={priority}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0qwcAAREAx9X+/mIAAAAASUVORK5CYII="
            style={{
              objectFit: "cover",
              borderRadius: "calc(12px - 3px)",
            }}
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Typography variant="h6" color="text.secondary">
            {data.date} &mdash; {data.length} read
          </Typography>
          <Typography variant="h4" color="text.primary">
            {data.title}
          </Typography>
          <Typography color="text.secondary">
            {data.chips.join(", ")}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default ArticleCard;
