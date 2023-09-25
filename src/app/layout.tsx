import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "NoteFlow - Capture, Create, Connect",
  description:
    "Elevate your productivity with NoteFlow - the ultimate note-taking app for capturing ideas, organizing thoughts, and syncing seamlessly across devices. Create, organize, and connect your notes effortlessly. Perfect for students, professionals, and creative thinkers.",
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <Box
            sx={{
              marginX: ["1rem", "1rem", "5rem"],
            }}
          >
            {children}
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
