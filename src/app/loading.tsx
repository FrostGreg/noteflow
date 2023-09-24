import { Box, Skeleton } from "@mui/material";

const HomeLoading = () => (
  <Box
    display="grid"
    gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
    gap={1}
  >
    {Array.from(Array(6).keys()).map((index) => (
      <Box
        key={index}
        sx={{ border: "3px solid transparent" }}
        width="422px"
        height="780px"
      >
        <Skeleton variant="rounded" height="35rem" />
        <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        <Skeleton variant="text" sx={{ fontSize: "34px" }} />
      </Box>
    ))}
  </Box>
);

export default HomeLoading;
