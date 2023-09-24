import Box from "@mui/material/Box";
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
      priority
      sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 66vw"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0qwcAAREAx9X+/mIAAAAASUVORK5CYII="
      style={{
        objectFit: "cover",
        borderRadius: "calc(12px - 3px)",
      }}
    />
  </Box>
);

export default BlogImage;
