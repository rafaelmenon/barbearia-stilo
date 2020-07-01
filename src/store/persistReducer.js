import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  return persistReducer(
    {
      key: 'stilo-barbearia',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
};