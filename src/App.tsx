import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { characterListActions } from './redux/characterList/actions';
import RootRouter from './routes/RootRouter';

export const API_URL = 'https://rickandmortyapi.com/api/character';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterListActions.getCharacters(API_URL));
  }, []);

  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}

export default App;
