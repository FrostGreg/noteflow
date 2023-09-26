import { Box, Skeleton } from "@mui/material";

const HomeLoading = () => (
  <>
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column-reverse", "column-reverse", "row"],
        justifyContent: "space-between",
        marginBottom: "10rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          margin: "1rem 2rem 1rem 0rem",
        }}
      >
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "48px" }} />
          <Skeleton variant="text" sx={{ fontSize: "34px" }} />
        </Box>
        <Skeleton
          sx={{
            border: "1px solid transparent",
            borderRadius: "8rem",
            padding: "4rem",
            paddingRight: "20rem",
            marginTop: ["5rem", "5rem", "5rem"],
            width: "100%",
          }}
        />
      </Box>
      <Skeleton
        variant="rounded"
        sx={{
          width: ["100%", "100%", "50%"],
          height: ["23rem", "25rem", "35rem"],
        }}
      />
    </Box>
    <Box
      display="grid"
      gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={1}
    >
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
    </Box>
  </>
);

export default HomeLoading;
