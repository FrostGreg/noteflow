"use client";
import { getPostData, getPostIDs } from "@/utils/orch";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar";
import Box from "@mui/material/Box";
import { Suspense, use, useState } from "react";

const ArticleGrid = () => {
  const [search, setSearch] = useState<string | undefined>();
  const postIDs = use(getPostIDs()) as string[];

  return (
    <>
      <SearchBar
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        boxProps={{
          marginTop: ["5rem", "5rem", "-5rem"],
          marginBottom: "15rem",
          width: ["100%", "100%", "45%"],
        }}
      />
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={1}
      >
        <Suspense fallback={<>Loading...</>}>
          {postIDs.length === 0 ? (
            <>Sorry I couldnt find any notes on that :(</>
          ) : (
            postIDs.map((id, index) => {
              const { data } = use(getPostData(id));
              return <ArticleCard id={id} data={data} key={index} />;
            })
          )}
        </Suspense>
      </Box>
    </>
  );
};

export default ArticleGrid;
