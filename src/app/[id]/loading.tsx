import { Box, Container, Skeleton } from "@mui/material";

const Loading = () => (
  <Container>
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
  </Container>
);

export default Loading;
