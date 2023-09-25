"use client";
import { Search } from "@mui/icons-material";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";

const SearchBar = ({
  setSearch,
  scrollRef,
  boxProps,
}: {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
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
            <Search sx={{ marginRight: "1rem" }} />
          </InputAdornment>
        }
        disableUnderline
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: "primary",
          borderRadius: "8rem",
          padding: "1.5rem",
        }}
      />
    </Box>
  );
};

export default SearchBar;
