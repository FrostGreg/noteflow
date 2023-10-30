"use client";
import NoteCard from "../NoteCard";
import SearchBar from "../SearchBar";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import { NoteData } from "@/utils/types";
import GridSkeleton from "./GridSkeleton";
import NoteImage from "../NoteImage";
import { Typography } from "@mui/material";
import { getNoteMeta } from "@/utils/orch";

const NoteCardGrid = () => {
  const [search, setSearch] = useState<string | undefined>();
  const [noteData, setNoteData] = useState<NoteData[]>();
  const gridRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setNoteData(undefined);

    const fetchData = async () => {
      const data = await getNoteMeta(search || "");
      setNoteData(data);
    };

    fetchData();
  }, [search]);

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        resultCount={noteData?.length}
        scrollRef={gridRef}
        boxProps={{
          marginTop: ["5rem", "5rem", "-5rem"],
          marginBottom: "15rem",
          width: ["100%", "100%", "45%"],
        }}
      />
      {noteData && Object.keys(noteData).length === 0 ? (
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
          <NoteImage
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
            Couldn&apos;t find any notes. Sorry.
          </Typography>
        </Box>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={1}
          ref={gridRef}
        >
          {noteData === undefined && <GridSkeleton />}
          {noteData &&
            noteData.map((note, index) => {
              return <NoteCard note={note} key={index} />;
            })}
        </Box>
      )}
    </>
  );
};

export default NoteCardGrid;
