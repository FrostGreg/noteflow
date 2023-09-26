"use client";
import { getPostData, getPostIDs } from "@/utils/orch";
import ArticleCard from "../ArticleCard";
import SearchBar from "../SearchBar";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import { PostData } from "@/utils/types";
import GridSkeleton from "./GridSkeleton";

const ArticleGrid = () => {
  const [search, setSearch] = useState<string | undefined>();
  const [postIDs, setPostIDs] = useState<string[]>([]);
  const [postData, setPostData] = useState<PostData[]>([]);
  const gridRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setPostIDs([]);
    setPostData([]);

    const fetchData = async () => {
      const res = await getPostIDs(search);
      setPostIDs(res);

      res.map(async (id: string) => {
        const { data } = await getPostData(id);
        setPostData((prev) => {
          const newArr = Array.from(prev);
          newArr.push(data);
          return newArr;
        });
      });
    };

    fetchData();
  }, [search]);

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        scrollRef={gridRef}
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
        ref={gridRef}
      >
        {postData.length === 0 ? (
          <GridSkeleton />
        ) : (
          postData.map((data, index) => {
            return <ArticleCard id={postIDs[index]} data={data} key={index} />;
          })
        )}
      </Box>
    </>
  );
};

export default ArticleGrid;
