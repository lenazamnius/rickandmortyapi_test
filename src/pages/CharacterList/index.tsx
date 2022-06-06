import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import { Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { UIEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader';
import { characterListActions } from '../../redux/characterList/actions';
import {
  getCharacters,
  getNextLink,
} from '../../redux/characterList/selectors';
import { getIsFetching } from '../../redux/ui/selectors';
import { MainRoutes } from '../../routes/books';

const CharacterList = () => {
  const characters = useSelector(getCharacters);
  const nextLink = useSelector(getNextLink);
  const isFetching = useSelector(getIsFetching);
  const dispatch = useDispatch();

  const loadMoreItems = (event: UIEvent<HTMLUListElement>) => {
    if (
      event.currentTarget.scrollTop + 650 ===
      event.currentTarget.scrollHeight
    ) {
      nextLink && dispatch(characterListActions.getCharacters(nextLink));
    }
  };

  if (!characters.length) return <></>;

  return (
    <Grid
      container
      direction="column"
      wrap={'nowrap'}
      spacing={2}
      position={'relative'}>
      <Typography variant="h3" gutterBottom component="div">
        Movie character list
      </Typography>
      <List
        style={{
          width: '100%',
          height: 650,
          overflowY: 'scroll',
          padding: 0,
        }}
        onScroll={loadMoreItems}>
        {characters.map((item) => {
          return (
            <ListItem
              key={item.id}
              component={NavLink}
              to={`${MainRoutes.characters}/${item.id}`}
              style={{ height: '72px' }}>
              <ListItemIcon>
                {item.status === 'Alive' ? (
                  <BatteryFullIcon fontSize="large" />
                ) : item.status === 'Dead' ? (
                  <Battery0BarIcon fontSize="large" />
                ) : (
                  <BatteryUnknownIcon fontSize="large" />
                )}
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.status} />
            </ListItem>
          );
        })}
        {!nextLink && (
          <ListItem>
            <ListItemText primary="No more characters..." />
          </ListItem>
        )}
      </List>
      <Loader isFetching={isFetching} />
    </Grid>
  );
};

export default CharacterList;
