import {createStore} from 'redux';

import answer from './reducers/answer';

const store = createStore(answer);

export default store;