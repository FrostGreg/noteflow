import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

// Lighter weight list than MUI lists

type children = { children: ReactNode; boxProps?: SxProps };

export const List = ({ children, boxProps }: children) => (
  <Box component="ul" sx={{ ...boxProps }}>
    {children}
  </Box>
);
export const ListItem = ({ children }: children) => (
  <Box component="li" sx={{ display: "block" }}>
    {children}
  </Box>
);
