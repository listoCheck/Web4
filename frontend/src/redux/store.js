import { createStore } from 'redux';
import rootReducer from './reducers';  // создадим этот файл на следующем шаге

// Создаем хранилище Redux с корневым редьюсером
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Поддержка Redux DevTools
);

export default store;
