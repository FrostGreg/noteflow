import { Box } from "@mui/material";
import Image from "next/image";

const BlogImage = ({ unsplashPath, ...boxProps }: { unsplashPath: string }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "35rem",
      ...boxProps,
    }}
  >
    <Image
      src={`https://source.unsplash.com/${unsplashPath}`}
      alt="Decorative image"
      fill
      style={{
        objectFit: "cover",
        borderRadius: "calc(12px - 3px)",
      }}
    />
  </Box>
);

export default BlogImage;
