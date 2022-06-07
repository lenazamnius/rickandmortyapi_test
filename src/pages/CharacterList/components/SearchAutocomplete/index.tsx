import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../../App';
import { getOptions } from '../../../../helpers';
import useDebounce from '../../../../Hooks/useDebounce';
import { characterListActions } from '../../../../redux/characterList/actions';
import {
  getFilteredCharacters,
  getFilteredNextLink,
  getIsLoadingMore,
} from '../../../../redux/characterList/selectors';
import { MainRoutes } from '../../../../routes/books';

const SearchAutocomplete = () => {
  const dispatch = useDispatch();
  const nextLink = useSelector(getFilteredNextLink);
  const characters = useSelector(getFilteredCharacters);
  const isLoading = useSelector(getIsLoadingMore);

  const [options, setOptions] = useState<{ label: string; id: number }[]>([]);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 600);

  useEffect(() => {
    setOptions(getOptions(characters));
  }, [characters]);

  useEffect(() => {
    dispatch(characterListActions.clearFiltered());
    search &&
      dispatch(
        characterListActions.getCharactersByName(
          `${API_URL}?name=${debouncedSearch}`,
        ),
      );
  }, [debouncedSearch]);

  const loadMoreHandler = (event: SyntheticEvent) => {
    if (
      event.currentTarget.scrollTop + event.currentTarget.clientHeight ===
      event.currentTarget.scrollHeight
    ) {
      nextLink && dispatch(characterListActions.loadMoreFiltered(nextLink));
    }
  };

  return (
    <Autocomplete
      fullWidth
      disablePortal
      options={options}
      loading={isLoading}
      style={{ marginBottom: '20px' }}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => setSearch(e.currentTarget.value)}
          label="Search character by name"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => {
        return (
          <li {...props} style={{ padding: 0 }} key={option.id}>
            <Box
              style={{
                width: '100%',
                height: '100%',
                padding: '6px 16px',
                textDecoration: 'none',
              }}
              component={NavLink}
              to={`${MainRoutes.characters}/${option.id}`}>
              {option.label}
            </Box>
          </li>
        );
      }}
      ListboxProps={{
        onScroll: loadMoreHandler,
      }}
    />
  );
};

export default SearchAutocomplete;
