import { Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { UIEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { characterListActions } from '../../redux/characterList/actions';
import {
  getCharacters,
  getNextLink,
} from '../../redux/characterList/selectors';
import { getIsFetching } from '../../redux/ui/selectors';
import CharacterListItem from './components/CharacterListItem';
import SearchAutocomplete from './components/SearchAutocomplete';

const CharacterList = () => {
  const dispatch = useDispatch();
  const nextLink = useSelector(getNextLink);
  const characters = useSelector(getCharacters);
  const isFetching = useSelector(getIsFetching);

  const loadMoreItems = (event: UIEvent<HTMLUListElement>) => {
    if (
      event.currentTarget.scrollTop + event.currentTarget.clientHeight ===
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
      <SearchAutocomplete />
      <List
        style={{
          width: '100%',
          height: '65vh',
          overflowY: 'scroll',
          padding: 0,
        }}
        onScroll={loadMoreItems}>
        {characters.map((item) => (
          <CharacterListItem
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
          />
        ))}
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
