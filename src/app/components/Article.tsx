import { Home } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Article = () => {
  const Title = "Embracing Change: Navigating Life's Unpredictable Journey";
  const maxTitleLength = 30;

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="../pages">
          <Home />
        </Link>
        <Typography color="text.primary">
          {Title.length > maxTitleLength
            ? Title.substring(0, maxTitleLength) + "..."
            : Title}
        </Typography>
      </Breadcrumbs>
      <Typography variant="h3" component="h1" sx={{ marginY: "8px" }}>
        {Title}
      </Typography>
      <Divider sx={{ marginBottom: "16px" }} />
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Chip label="Tech" />
        <Chip label="Business" />
        <Chip label="Self-help" />
      </Box>
      <Box sx={{ marginX: "2rem" }}>
        <Typography sx={{ marginTop: "48px" }}>
          In a world that's constantly evolving, embracing change has become
          more than just a catchphrase – it's a necessary mindset for navigating
          life's unpredictable journey. Just like the seasons shift and
          transform, our lives too undergo various phases of growth, challenges,
          and triumphs.
        </Typography>
        <Typography my={2}>
          Picture this: you wake up one morning to find yourself surrounded by
          unfamiliar landscapes. At first, discomfort and uncertainty may wash
          over you, but here's the catch – these moments of change are where we
          truly discover our resilience and adaptability.
        </Typography>
        <Typography my={2}>
          Change isn't always about grand gestures and sweeping transformations.
          It can be as simple as altering your daily routine, trying a new
          hobby, or shifting your perspective on a long-standing issue. These
          micro-changes, seemingly insignificant at first, can accumulate and
          lead to profound personal growth.
        </Typography>
        <Typography my={2}>
          Remember the time when you hesitantly started that new job or moved to
          a new city? The initial unease gradually gave way to a sense of
          accomplishment and a broader outlook on life. Similarly, embracing
          change opens doors to new experiences and opportunities that might
          have remained hidden otherwise.
        </Typography>
        <Typography my={2}>
          But let's not overlook the discomfort that often accompanies change.
          It's perfectly natural to feel apprehensive when faced with
          uncertainty. However, it's in these moments of discomfort that we
          truly learn about ourselves. We discover untapped strengths, forge new
          connections, and develop coping mechanisms we never knew we had.
        </Typography>
        <Typography my={2}>
          So, how can we gracefully navigate these ever-changing waters? Here
          are a few tips to keep in mind:
        </Typography>
        <List>
          <ListItem>
            <Typography>
              1. Cultivate Curiosity: Approach change with a curious mind.
              Instead of fearing the unknown, treat it as an adventure. Ask
              questions, explore possibilities, and maintain an open heart.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              2. Stay Flexible: Rigidity can hinder growth. Be willing to adapt
              and adjust your course when unexpected turns arise. Flexibility is
              the key to riding the waves of change.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              3. Mindfulness Matters: Ground yourself in the present moment.
              Mindfulness can alleviate the anxiety that often accompanies
              change by helping you focus on what's happening right now, rather
              than worrying about an uncertain future.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              4. Seek Support: You're not alone on this journey. Lean on
              friends, family, or even professionals for guidance and support.
              Sharing your experiences can often lighten the emotional load.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              5. Celebrate Small Wins: Acknowledge your progress, no matter how
              minor. Every step you take toward embracing change is a victory
              worth celebrating.
            </Typography>
          </ListItem>
        </List>
        <Typography>
          Remember, change is a constant in life – an ever-present force that
          shapes us, challenges us, and ultimately propels us forward. By
          embracing change with an open heart and a curious mind, you can turn
          life's uncertainties into opportunities for growth and transformation.
          So, step into the unknown with confidence, and let the journey unfold.
        </Typography>
      </Box>
    </Container>
  );
};

export default Article;
