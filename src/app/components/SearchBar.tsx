"use client";
import { Search } from "@mui/icons-material";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";

const color = "text.secondary";

const SearchBar = ({
  setSearch,
  scrollRef,
  resultCount,
  boxProps,
}: {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
  resultCount?: number;
  scrollRef: MutableRefObject<HTMLDivElement | null>;
  boxProps?: SxProps;
}) => {
  const [value, setValue] = useState("");
  return (
    <Box sx={{ ...boxProps }}>
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch(value);
            scrollRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Search notes"
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{ marginRight: "1rem", color }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Typography variant="h6" color={color}>
              {resultCount ?? "~"}
            </Typography>
          </InputAdornment>
        }
        disableUnderline
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: color,
          borderRadius: "8rem",
          padding: "1.5rem",
          color,
        }}
      />
    </Box>
  );
};

export default SearchBar;
