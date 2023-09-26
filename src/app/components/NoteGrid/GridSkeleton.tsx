import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const GridSkeleton = () => (
  <>
    {Array.from(Array(6).keys()).map((index) => (
      <Box
        key={index}
        sx={{ border: "3px solid transparent", position: "relative" }}
      >
        <Skeleton variant="rounded" height="35rem" />
        <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        <Skeleton variant="text" sx={{ fontSize: "34px" }} />
      </Box>
    ))}
  </>
);

export default GridSkeleton;
