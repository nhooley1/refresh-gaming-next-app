import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import basketReducer from '../reducers/basketReducer';

const store = configureStore({
  reducer: basketReducer,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
