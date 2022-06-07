import { ICharacter } from './redux/characterList/typedefs';

export const getOptions = (data: ICharacter[]) => {
  return data.map((item) => ({
    label: item.name,
    id: item.id,
  }));
};
