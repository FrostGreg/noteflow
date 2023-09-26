"use client";
import { getPostData, getPostIDs } from "@/utils/orch";
import ArticleCard from "../ArticleCard";
import SearchBar from "../SearchBar";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import { PostData } from "@/utils/types";
import GridSkeleton from "./GridSkeleton";
import BlogImage from "../BlogImage";
import { Typography } from "@mui/material";

type PostDataWithID = PostData & { id: string };

const ArticleGrid = () => {
  const [search, setSearch] = useState<string | undefined>();
  const [postData, setPostData] = useState<PostDataWithID[]>();
  const gridRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setPostData(undefined);

    const fetchData = async () => {
      const res = await getPostIDs(search);

      if (res.length === 0) {
        setPostData([]);
        return;
      }

      await res.map(async (id: string) => {
        const { data } = await getPostData(id);
        setPostData((prev) => {
          const newArr = Array.from(prev || []);
          newArr.push({ id, ...data });
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
        resultCount={postData?.length}
        scrollRef={gridRef}
        boxProps={{
          marginTop: ["5rem", "5rem", "-5rem"],
          marginBottom: "15rem",
          width: ["100%", "100%", "45%"],
        }}
      />
      {postData && postData.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5rem",
            flexDirection: "column",
            width: ["100%", "80%", "40%"],
            margin: "auto",
          }}
          ref={gridRef}
        >
          <BlogImage
            unsplashPath="ZnLprInKM7s"
            boxProps={{ height: "40rem" }}
            imageProps={{
              priority: false,
              sizes: "(max-width: 600px) 100vw, (max-width: 900px) 80vw, 40vw",
            }}
          />
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.secondary"
            sx={{ marginTop: "2rem", marginBottom: "11rem" }}
          >
            Couldn&apos;t find any notes on that topic. Sorry.
          </Typography>
        </Box>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={1}
          ref={gridRef}
        >
          {postData === undefined && <GridSkeleton />}
          {postData &&
            postData.map(({ id, ...data }, index) => {
              return <ArticleCard id={id} data={data} key={index} />;
            })}
        </Box>
      )}
    </>
  );
};

export default ArticleGrid;
