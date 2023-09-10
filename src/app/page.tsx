import Link from "next/link";
import { Box, Typography } from "@mui/material";

import { Inter, Lato } from "next/font/google";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Image from "next/image";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: "700", subsets: ["latin"] });

export default function Home() {
  const postIDs = getAllPostIds();

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1}>
      {postIDs.map((id, index) => {
        const { data } = getPostData(id);
        return (
          <Box
            key={index}
            gridColumn={(index % 3) + 1}
            sx={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
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
                border: "3px solid darkgreen",
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
            <Link href={`${id}`} className="no-decoration">
              <Box
                sx={{
                  position: "relative",
                  width: "25rem",
                  height: "35rem",
                }}
              >
                <Image
                  src={`https://source.unsplash.com/${data.imagePath}`}
                  alt="random image"
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "calc(12px - 3px)",
                  }}
                />
              </Box>
              <Box sx={{ marginTop: "1rem" }}>
                <Typography variant="h6" className={lato.className}>
                  {data.date} &mdash; {data.length} read
                </Typography>
                <Typography
                  variant="h4"
                  color="black"
                  className={inter.className}
                >
                  {data.title}
                </Typography>
              </Box>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}
