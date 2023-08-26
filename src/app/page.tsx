import Grid from "@mui/joy/Grid";
import ProfileCard from "./components/ProfileCard";
import Article from "./components/Article";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid md>
          <ProfileCard />
        </Grid>
        <Grid md={6}>
          <Article />
        </Grid>
        <Grid md></Grid>
      </Grid>
    </>
  );
}
