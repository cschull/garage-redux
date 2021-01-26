import { FETCH_OWNERS, FETCH_CAR, DELETE_CAR } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_OWNERS: {
      return action.payload;
    }
    case FETCH_CAR: {
      return [ action.payload ];
    }
    case DELETE_CAR: {
      return state.filter((car) => car !== action.payload);
    }
    default: {
      return state;
    }
  }
}
