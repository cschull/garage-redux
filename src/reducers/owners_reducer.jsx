import { FETCH_OWNERS } from '../actions/index';


export default function (state = null, action) {
  switch (action.type) {
    case FETCH_OWNERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
