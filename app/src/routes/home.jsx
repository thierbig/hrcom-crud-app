import calendar from "../assets/calendar.svg";
import { Stack, Button, Box} from "@mui/material";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <Stack alignItems="center">
        <img src={calendar} width="300px" height="300px" alt="school image" />
        <a>HRCom</a>
        <Box m={1}>
          <Button component={Link} to="events" variant="contained" size="large">
            Event Management
          </Button>
          </Box>
          <Box m={1}>
          <Button
            component={Link}
            to="events/create"
            variant="contained"
            size="large"
          >
            Event Creation
          </Button></Box>
      </Stack>
    </>
  );
};

export default Home;
