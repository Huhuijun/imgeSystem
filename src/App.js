import './App.css';
import IndexRouter from './router/IndexRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persiststore} from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
         <IndexRouter></IndexRouter>
      </PersistGate> 
    </Provider>
  );
}

export default App;
