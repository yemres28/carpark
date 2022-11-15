import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useStopwatch } from "react-timer-hook";

function Boxes() {
  const { seconds, minutes, hours, days } = useStopwatch({ autoStart: true });
  return (
    <div>
      <Box maxWidth sx={{ backgroundColor: "#c0392b", color: 'white' }}>
        <Grid
          container
          sx={{ height: "calc(33.333vh - 47px)" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div style={{fontSize: 50}}>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
            <span>{seconds}</span>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default Boxes;
