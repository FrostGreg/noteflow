"use client";

import { Pause, PlayArrow, Refresh, RestartAlt } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";

const formatMilliseconds = (time: number) =>
  [
    Math.floor((time / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0"),
    Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0"),
  ].join(":");

const AudioPlayback = ({ content }: { content: string }) => {
  const [speechError, setSpeechError] = useState<
    undefined | SpeechSynthesisErrorCode
  >(undefined);
  const [isPlaying, setPlaying] = useState<undefined | boolean>();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [lastPausedTime, _setLastPausedTime] = useState(0);
  const [totalPausedTime, _setTotalPausedTime] = useState(0);

  const lastPausedTimeRef = useRef(lastPausedTime);
  const totalPausedTimeRef = useRef(totalPausedTime);

  const setLastPausedTime = (data: number) => {
    lastPausedTimeRef.current = data;
    _setLastPausedTime(data);
  };

  const setTotalPausedTime = (data: number) => {
    totalPausedTimeRef.current = data;
    _setTotalPausedTime(data);
  };

  const reset = () => {
    setPlaying(undefined);
    setElapsedTime(0);
    setTotalPausedTime(0);
    setLastPausedTime(0);
  };

  if (typeof window === undefined) {
    return <></>;
  }

  const onClick = () => {
    if (isPlaying === undefined) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = content;
      utterance.voice = window.speechSynthesis.getVoices()[0];

      utterance.onboundary = (event) => {
        setElapsedTime(event.elapsedTime);
      };
      utterance.onpause = (event) => {
        setLastPausedTime(event.elapsedTime);
      };
      utterance.onresume = (event) => {
        setTotalPausedTime(
          totalPausedTimeRef.current +
            (event.elapsedTime - lastPausedTimeRef.current)
        );
      };
      utterance.onend = () => {
        reset();
      };
      utterance.onerror = (event) => {
        if (["canceled", "interrupted"].includes(event.error)) {
          return;
        }
        setSpeechError(event.error);
      };

      window.speechSynthesis.speak(utterance);
      setPlaying(true);
    } else if (isPlaying) {
      window.speechSynthesis.pause();
      setPlaying(false);
    } else {
      window.speechSynthesis.resume();
      setPlaying(true);
    }
  };

  const onStop = () => {
    window.speechSynthesis.cancel();
    reset();
  };

  if (speechError !== undefined) {
    return (
      <Box
        sx={{
          backgroundColor: "rgb(var(--audio-background-rgb))",
          color: "rgb(var(--audio-error-rgb))",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => {
            setSpeechError(undefined);
          }}
          sx={{
            color: "rgb(var(--audio-error-rgb))",
          }}
        >
          <Refresh />
        </IconButton>
        <Typography>{`An error has occurred with the speech synthesis: ${speechError}`}</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(var(--audio-background-rgb))",
          border: "1px solid rgb(var(--audio-border-rgb))",
          borderRadius: "1rem",
          color: "rgb(var(--audio-foreground-rgb))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <IconButton
          onClick={onClick}
          sx={{
            color: "rgb(var(--audio-foreground-rgb))",
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton
          onClick={onStop}
          sx={{
            color: "rgb(var(--audio-foreground-rgb))",
          }}
        >
          <RestartAlt />
        </IconButton>
        <Typography
          sx={{
            paddingX: "1rem",
            borderLeft: "1px solid rgb(var(--audio-foreground-rgb))",
          }}
        >
          {formatMilliseconds(elapsedTime - totalPausedTime)}
        </Typography>
      </Box>
    </>
  );
};

export default AudioPlayback;
