import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './eventReducer';
import { reducer as formReducer } from 'redux-form';
import LoadDetailsReducer from './eventDetailsReducer';
import geolocationReducer from './geolocationReducer';
import markersReducer from './markersReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  details: LoadDetailsReducer,
  events,
  currentLocation: geolocationReducer,
  markers: markersReducer,
});

export default rootReducer;
