import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Time from "./time";
import Textbox from "./textbox";
import { useState} from "react";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.3),
  textAlign: "center",
}));

function Columns() {
  const [plates, setPlates] = useState({
    plate1: true,
    plate2: true,
    plate3: true,
    plate4: true,
    plate5: true,
    plate6: true,
    plate7: true,
    plate8: true,
    plate9: true,
  });

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stack>
          <Item
            sx={{
              display: "inherit",
              justifyContent: "space-between",
              height: "33vh",
            }}
          >
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>            
              <div style={{minHeight: plates.plate1 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate1 && <Time />}
              </div>
              {plates.plate1 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate1: !plates.plate1})}
              >
                <b>{plates.plate1 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate2 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate2 && <Time />}
              </div>
              {plates.plate2 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate2: !plates.plate2})}              >
                <b>{plates.plate1 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate3 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate3 && <Time />}
              </div>
              {plates.plate3 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate3: !plates.plate3})}              >
              
                <b>{plates.plate3 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
          </Item>
          <Item
            sx={{
              display: "inherit",
              justifyContent: "space-between",
              borderDecoration: "none",
              height: "33vh",
            }}
          >
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate4 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate4 && <Time />}
              </div>
              {plates.plate4 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate4: !plates.plate4})}              >
              
                <b>{plates.plate4 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate5 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate5 && <Time />}
              </div>
              {plates.plate5 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate5: !plates.plate5})}              >
              
                <b>{plates.plate5 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate6 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate6 && <Time />}
              </div>
              {plates.plate6 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate6: !plates.plate6})}              >
              
                <b>{plates.plate6 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
          </Item>
          <Item
            sx={{
              display: "inherit",
              justifyContent: "space-between",
              height: "33vh",
            }}
          >
            <Item sx={{ width: "33%", backgroundColor:"#2ecc71"}}>
               <div style={{minHeight: plates.plate7 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate7 && <Time />}
              </div>
              {plates.plate7 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate7: !plates.plate7})}              >
              
                <b>{plates.plate7 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate8 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate8 && <Time />}
              </div>
              {plates.plate8 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate8: !plates.plate8})}              >
              
                <b>{plates.plate8 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
            <Item sx={{ width: "33%", backgroundColor: "#2ecc71" }}>
            <div style={{minHeight: plates.plate9 ? 'calc(33.333vh - 97px)' : 'calc(33.333vh - 47px)'}}>
                {!plates.plate9 && <Time />}
              </div>
              {plates.plate9 && <Textbox />}
              <Button
                fullWidth
                sx={{ backgroundColor: "white", color: "black", height: 40}}
                onClick={()=>setPlates({...plates, plate9: !plates.plate9})}              
              >
                <b>{plates.plate9 ? 'Parkı Başlat' : 'Parkı Bitir'}</b>
              </Button>
            </Item>
          </Item>
        </Stack>
      </Box>
    </div>
  );
}

export default Columns;
