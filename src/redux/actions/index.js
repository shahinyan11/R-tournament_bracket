export const SET_DATA = 'SET_DATA';
export const SET_ROUND_LIST = 'SET_ROUND_LIST';
export const SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER';

export function setDataAction(data) {
  return {type: SET_DATA, payload: data};
}

export function setRoundListAction(list) {
  return {type: SET_ROUND_LIST, payload: list};
}

export function setActivePlayerAction(player) {
  return {type: SET_ACTIVE_PLAYER, payload: player};
}


