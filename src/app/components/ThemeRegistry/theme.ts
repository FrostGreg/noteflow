import { createTheme } from "@mui/material";
import { Fira_Code, Inter, Lato } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

// Left as comment until I can find a way for dynamic theming one SSR ;(
// const lightPalette: PaletteOptions = {
//   mode: "light",
//   background: {
//     default: "#ebebeb",
//     paper: "#ffffff",
//   },
//   primary: {
//     main: "#696969",
//   },
//   secondary: {
//     main: "#007d1b",
//   },
//   error: {
//     main: "#a05b00",
//   },
//   text: {
//     primary: "#19191b",
//     secondary: "#5d6c79",
//   },
// };

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1c1c1e",
      paper: "#2c2c2e",
    },
    primary: {
      main: "#858585",
    },
    secondary: {
      main: "#007d1b",
    },
    error: {
      main: "#ffd60a",
    },
    text: {
      primary: "#f2f2f7",
      secondary: "#758795",
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
    h3: {
      fontFamily: inter.style.fontFamily,
    },
    h4: {
      fontFamily: inter.style.fontFamily,
    },
    h5: {
      fontFamily: firaCode.style.fontFamily,
    },
    h6: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 700,
    },
  },
});

export default theme;
