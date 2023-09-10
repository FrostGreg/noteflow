import { Box, SxProps } from "@mui/material";
import Image, { ImageProps } from "next/image";

export type MarkdownImageProps = {
  src: string;
  alt: string;
  boxProps: SxProps;
  imageProps: ImageProps;
};

const MarkdownImage = ({
  src,
  alt,
  boxProps,
  imageProps,
}: MarkdownImageProps) => (
  <Box
    sx={{
      position: "relative",
      ...boxProps,
    }}
  >
    <Image
      fill
      style={{ objectFit: "contain" }}
      {...imageProps}
      src={src}
      alt={alt}
    />
  </Box>
);

export default MarkdownImage;
