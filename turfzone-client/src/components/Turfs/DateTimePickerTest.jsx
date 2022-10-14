import * as React from 'react';


import TextField from "@mui/material/TextField";
import { Container, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';


import axios from "axios";

import { useState, useEffect, useRef } from "react";
import { baseUrl } from "../../core";


function PlanningData() {


  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const [allPlanData, setAllPlanData] = useState([]);

  const [value, setValue] = React.useState(new Date());


  const [plandata, setPlanData] = useState({
    finishcode: "",
    styleName: "",
    MON: "",
    division: "",
    orderQuantity: "",
    barcode: "",
    customer: "",
    orderStatus: "",
    planQuantity: "",
    planDate: "",
  });

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/gellAllPlanData`).then((res) => {
      console.log("gellAllPlanData:  ", res.data);
      setAllPlanData(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/plandata`)
      .then((res) => {
        console.log("res +++: ", res.data);
        setPlanData(res.data);
      });
  }, []);

  

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseUrl}/api/v1/plandata`,
        {
          finishcode: plandata.finishcode,
          styleName: plandata.styleName,
          MON: plandata.MON,
          division: plandata.division,
          orderQuantity: plandata.orderQuantity,
          barcode: plandata.barcode,
          customer: plandata.customer,
          orderStatus: plandata.orderStatus,
          planQuantity: plandata.planQuantity,
          planDate: plandata.planDate,

        }
      )
      .then((res) => {
        console.log("res: ", res.data);
      });
  };

  return (
    <div>

      <br />

        <h1> Planning Data </h1>

        <form onSubmit={submit}>

    <FormControl sx={{ m: 2.5 }} variant="standard">

    <LocalizationProvider dateAdapter={AdapterDateFns}>
        
        <DesktopDatePicker
          label="For desktop"
          value={plandata.planDate}
          minDate={new Date('2017-01-01')}
          onChange={(e) => {
            setPlanData((prev) => {
              return {
                 ...prev, planDate: e.target.value };
              });
          }
        }

          renderInput={(params) => <TextField {...params} />}
        />
        
    </LocalizationProvider>
    </FormControl>
  
      
          <Button
          sx={{ m: 2.5 }}
            style={{
              display: "inline-block",
              padding: "8px",
            }}
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </form>


    </div>
  );
}

export default PlanningData;