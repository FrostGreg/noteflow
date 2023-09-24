import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));
const Skeleton = dynamic(() => import("@mui/material/Skeleton"));

const Loading = () => (
  <Box>
    <Box sx={{ marginY: "4rem" }}>
      <Skeleton
        variant="text"
        sx={{
          fontSize: "48px",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: "20px",
          width: "30%",
        }}
      />
    </Box>
    <Skeleton variant="rounded" height="35rem" />

    <Skeleton
      variant="rounded"
      height="42px"
      width="350px"
      sx={{
        marginY: "3rem",
      }}
    />
    <Skeleton variant="text" sx={{ marginTop: "6rem", fontSize: "18px" }} />
    <Skeleton variant="text" sx={{ fontSize: "18px" }} />
    <Skeleton variant="text" sx={{ fontSize: "18px" }} />
    <Skeleton variant="text" sx={{ fontSize: "18px" }} />
  </Box>
);

export default Loading;
