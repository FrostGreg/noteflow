import { Search } from "@mui/icons-material";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { ChangeEventHandler } from "react";

const SearchBar = ({
  onChange,
  boxProps,
}: {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  boxProps?: SxProps;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid",
        borderColor: "primary",
        borderRadius: "8rem",
        padding: "1.5rem",
        alignItems: "center",
        ...boxProps,
      }}
    >
      <Search sx={{ marginRight: "1rem" }} />
      <Input
        onChange={onChange}
        placeholder="Search notes"
        disableUnderline
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default SearchBar;
