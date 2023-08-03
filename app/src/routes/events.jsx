import { Grid, Fab } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import EventItem from "../components/event-item";
import { Link } from "react-router-dom";

export const loader = async () => {
  const res = await axios.get("http://localhost:4000/api/v1/events");
  debugger
  return res.data.data.events;
};

const Events = () => {
  const events = useLoaderData();
  return (
    <div>
      <Fab
        component={Link}
        to="create"
        color="secondary"
        sx={{ position: "fixed", bottom: 50, right: 100 }}
      >
        <AddIcon />
      </Fab>
      <Grid spacing={2} container>
        {events && events.length > 0 ? (
          events.map((event,index) => {
            debugger;
            return <EventItem key={event.eventId} id={event.eventId} attributes={event} />;
          })
        ) : (
          <p>No events found.</p>
        )}
      </Grid>
    </div>
  );
};

export default Events;
