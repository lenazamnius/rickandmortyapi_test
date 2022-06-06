import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { characterActions } from '../../redux/character/actions';
import { getCharacter } from '../../redux/character/selectors';
import { getIsFetching } from '../../redux/ui/selectors';
import { MainRoutes } from '../../routes/books';

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const data = useSelector(getCharacter);
  const isFetching = useSelector(getIsFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.getCharacter(id as string));

    return () => {
      dispatch(characterActions.fillCharacter(null));
    };
  }, []);

  if (!data) return <></>;

  return (
    <Box position={'relative'}>
      <Card style={{ padding: '50px 30px', minWidth: '500px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom component="div">
            Status: {data.status}
          </Typography>
          <Typography gutterBottom component="div">
            Created: {new Date(data.created).toLocaleDateString()}
          </Typography>
          <Typography gutterBottom component="div">
            Gender: {data.gender}
          </Typography>
          <Typography gutterBottom component="div">
            Species: {data.species}
          </Typography>
          <Typography gutterBottom component="div">
            Location name: {data.location.name}
          </Typography>
          <Typography gutterBottom component="div">
            Episodes:{' '}
            {data.episode.map((item) => (
              <span key={item}>{item.split('/').pop()}; </span>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={MainRoutes.characters}
            variant="contained"
            color="primary">
            Back to list
          </Button>
        </CardActions>
      </Card>
      <Loader isFetching={isFetching} />
    </Box>
  );
};

export default Character;
