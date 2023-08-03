import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);

export const action = async (data) => {  
  const res = await axios.post(
    "http://localhost:4000/api/v1/event/create",
    data,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return res;
};

const CreateEvent = (props) => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [dateRange, setDateRange] = useState([dayjs("2022-04-17"), dayjs("2022-04-21")]);
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCancel = () => {
    navigate('/');
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!eventName || !eventDescription || !dateRange) {
      setErrorMessage('Please fill all fields correctly.');
      return;
    }

    if (eventName.length > 32) {
      setErrorMessage('Event name should not exceed 32 characters.');
      return;
    }

    const [dateBegin, dateEnd] = dateRange;    
    const adjustedBeginDate = dateBegin.tz(selectedTimezone ? selectedTimezone.value : 'UTC').format();
    const adjustedEndDate = dateEnd.tz(selectedTimezone ? selectedTimezone.value : 'UTC').format();

    const data = {
      eventName,
      eventDescription,
      eventDateBegin: adjustedBeginDate,
      eventDateEnd: adjustedEndDate,      
    };

    const res = await action(data);
    if (res.data.success) {
      navigate('/');
    }
  };

  return (
    <div>
      <Paper component={Stack} spacing={2} sx={{ p: 3 }}>
        <Typography variant="h4">Create Event</Typography>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <form onSubmit={submitForm}>
          <Grid spacing={2} container>
            <Grid sx={12} md={3}>
              <InputLabel htmlFor="name-input">Title</InputLabel>
              <TextField
                name="eventName"
                placeholder="Algebra Networking 101"
                fullWidth
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </Grid>
            <Grid sx={12} md={3}>
              <InputLabel htmlFor="name-input">Description</InputLabel>
              <TextField
                name="eventDescription"
                placeholder="Math lovers paradise..."
                fullWidth
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </Grid>
            <Grid sx={12} md={3}>
              <InputLabel htmlFor="name-input">Date Range</InputLabel>
              <DateRangePicker
                value={dateRange}
                onChange={(range) => setDateRange(range)}
              />
            </Grid>
            <Grid sx={12} md={3}>
              <InputLabel htmlFor="name-input">Timezone</InputLabel>
              <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2}>
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loadingIndicator="Creating..."
            >
              Create New Event
            </LoadingButton>
            <Button color="inherit" variant="outlined" size="large" onClick={handleCancel}>
              Cancel
            </Button>
          </Stack>
        </form>
      </Paper>
    </div>
  );
};

export default CreateEvent;
