import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import Image from "next/image";
import { ImageProps } from "next/image";

const NoteImage = ({
  unsplashPath,
  boxProps,
  imageProps,
}: {
  unsplashPath: string;
  boxProps?: SxProps;
  imageProps?: Omit<ImageProps, "src" | "alt">;
}) => (
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
      {...imageProps}
    />
  </Box>
);

export default NoteImage;
