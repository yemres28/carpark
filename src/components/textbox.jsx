import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Boxes() {
  const onChangeTextField = (event) => {
     onChangeTextField= ({[event.target.name]: event.target.value})
  };
  return (
    <div>
      <Grid sx={{ verticalAlign: "inherit", height: 50 }}>
        <TextField
          label="Plaka Giriniz"
          id="standard-size-small"
          fullWidth
          size="small"
          variant="standard"
          focused
          onChange={onChangeTextField}
          placeholder="34 BGS 129"
        />
      </Grid>
    </div>
  );
}

export default Boxes;
