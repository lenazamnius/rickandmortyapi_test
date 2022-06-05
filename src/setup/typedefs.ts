import { RouterState } from 'connected-react-router';
import { UiState } from '../bus/ui/typedefs';

export interface RootState {
  router: RouterState;
  ui: UiState;
}
