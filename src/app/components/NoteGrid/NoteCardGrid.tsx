"use client";
import { getNoteData, getNoteIDs } from "@/utils/orch";
import useSWR from "swr";
import NoteCard from "../NoteCard";
import SearchBar from "../SearchBar";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import { NoteData } from "@/utils/types";
import GridSkeleton from "./GridSkeleton";
import NoteImage from "../NoteImage";
import { Typography } from "@mui/material";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type NoteDataWithID = { id: string; data: NoteData };

const NoteCardGrid = () => {
  const [search, setSearch] = useState<string | undefined>();
  // const [noteData, setNoteData] = useState<NoteDataWithID[]>();
  const gridRef = useRef<null | HTMLDivElement>(null);

  // const { data: noteIDs } = useSWR("/api/note-ids", fetcher);

  const { data: noteData } = useSWR<NoteDataWithID>(
    `/api/note-data?id=${search}`,
    fetcher
  );

  // useEffect(() => {
  //   setNoteData(undefined);

  //   const fetchData = async () => {
  //     const res = await getNoteIDs(search);

  //     if (res.length === 0) {
  //       setNoteData([]);
  //       return;
  //     }

  //     await res.map(async (id: string) => {
  //       const { data } = await getNoteData(id);
  //       setNoteData((prev) => Array.from(prev || []).concat({ id, ...data }));
  //     });
  //   };

  //   fetchData();
  // }, [search]);

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        // resultCount={noteData?.length}
        resultCount={1}
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
          {/* {noteData &&
            noteData.map(({ id, ...data }, index) => {
              return <NoteCard id={id} data={data} key={index} />;
            })} */}
          {noteData && <NoteCard id={noteData.id} data={noteData.data} />}
        </Box>
      )}
    </>
  );
};

export default NoteCardGrid;
