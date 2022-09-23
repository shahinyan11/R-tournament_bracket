import {SET_ACTIVE_PLAYER, SET_DATA, SET_ROUND_LIST} from '../actions';

const initialState = {
  data: {},
  roundList: [],
  activePlayer: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case SET_ROUND_LIST: {
      return {
        ...state,
        roundList: [...action.payload],
      };
    }

    case SET_ACTIVE_PLAYER: {
      return {
        ...state,
        activePlayer: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
