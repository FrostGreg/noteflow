import { Box, Typography } from "@mui/material";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Link from "next/link";
import { Inter, Lato } from "next/font/google";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: "700", subsets: ["latin"] });

const Page = () => {
  const x = getAllPostIds();

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1}>
      {x.map((id, index) => {
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
            <Link href={`pages/${id}`} className="no-decoration">
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={`https://source.unsplash.com/random/${index}`}
                  alt="random image"
                  style={{
                    objectFit: "cover",
                    width: "25rem",
                    height: "35rem",
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
};

export default Page;
