import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import _ from 'lodash';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Link, useFetcher, useNavigation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';

const EventItem = ({ id, attributes }) => {
  const fetcher = useFetcher();
  const navigation = useNavigation();

  const label = `Event #${id}: ${attributes.name}`; // Create the label with id and name

  return (
    <Grid md={2} item>
      <Paper component={Stack} spacing={2} alignItems="center" sx={{ p: 2 }}>
        {/* Use the label as the content for Typography */}
        <Typography
          sx={{ textDecoration: 'none', color: 'primary.main' }}
          component={Link}
          to={`${id}/view`}
          variant="h5"
        >
          {label}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default EventItem;
