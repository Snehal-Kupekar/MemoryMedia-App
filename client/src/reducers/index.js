import { combineReducers } from 'redux';

import posts from './posts';
import users from './users.js';

export const reducers = combineReducers({ posts , users });