import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MainRoutes } from '../../../../routes/books';

interface Props {
  id: number;
  status: string;
  name: string;
}

const CharacterListItem: FC<Props> = ({ id, status, name }) => {
  return (
    <ListItem
      component={NavLink}
      to={`${MainRoutes.characters}/${id}`}
      style={{ height: '72px' }}>
      <ListItemIcon>
        {status === 'Alive' ? (
          <BatteryFullIcon fontSize="large" />
        ) : status === 'Dead' ? (
          <Battery0BarIcon fontSize="large" />
        ) : (
          <BatteryUnknownIcon fontSize="large" />
        )}
      </ListItemIcon>
      <ListItemText primary={name} secondary={status} />
    </ListItem>
  );
};

export default CharacterListItem;
