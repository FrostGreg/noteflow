import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
// const theme = createTheme();

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
      <CssBaseline />
      {/* <ThemeProvider theme={theme}> */}
      <body className={inter.className}>{children}</body>
      {/* </ThemeProvider> */}
    </html>
  );
}
