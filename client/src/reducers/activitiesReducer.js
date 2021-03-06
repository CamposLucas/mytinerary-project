import {GET_ACTIVITIES, ACT_LOADING} from '../actions/types'

const initialState = {
  activities: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loading: false
      }
    case ACT_LOADING:
      return {
        ...state,
        loading: true
      }
    default: 
      return state;
  }
}