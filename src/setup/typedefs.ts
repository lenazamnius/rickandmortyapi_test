import { RouterState } from 'connected-react-router';
import { CharacterState } from '../redux/character/typedefs';
import { CharacterListState } from '../redux/characterList/typedefs';
import { UiState } from '../redux/ui/typedefs';

export interface RootState {
  router: RouterState;
  ui: UiState;
  characterList: CharacterListState;
  character: CharacterState;
}
