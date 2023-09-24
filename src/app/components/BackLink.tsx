import { KeyboardBackspace } from "@mui/icons-material";
import Link from "next/link";

const BackLink = () => (
  <Link href="/" style={{ display: "flex", width: "fit-content" }}>
    <KeyboardBackspace
      sx={{
        marginRight: "1.5rem",
      }}
    />
    Back to Articles
  </Link>
);

export default BackLink;
