import { fetchPlayers, fetchPlayerStats } from '~/api/pubg';

const ADD_PLAYERS = 'ADD_PLAYERS';
const PLAYER_REMOVE = 'PLAYER_REMOVE';

function addPlayers(data) {
  return {
    type: ADD_PLAYERS,
    players: data,
  };
}

function removePlayer(data) {
  return {
    type: PLAYER_REMOVE,
    players: data,
  };
}

export function handleAddPlayers(playername) {
  return (dispatch, getState) => {
    const requestedPlayers = [
      ...Object.keys(getState().players),
    ];
    if (playername !== undefined) {
      requestedPlayers.push(playername);
    }
    return fetchPlayers(requestedPlayers).then((response) => {
      const data = response.data.data.reduce((playerList, player) => {
        playerList[player.attributes.name] = player;
        return playerList;
      }, {});
      dispatch(addPlayers(data));
    }).catch((error) => {
      console.log(error, error.response);
    });
  };
}

export function handleAddPlayerStats(playername) {
  return (dispatch) => {
    fetchPlayerStats(playername).then((response) => {
      console.log(response);
    }).catch(error => console.log(error, error.response));
  };
}

export function handleRemovePlayer(playername) {
  return (dispatch, getState) => {
    const { players: { [playername]: test2, ...newPlayers } } = getState();
    dispatch(removePlayer(newPlayers));
  };
}

export default function players(state = {}, action) {
  switch (action.type) {
    case ADD_PLAYERS:
      return {
        ...state,
        ...action.players,
      };
    case PLAYER_REMOVE:
      return {
        ...action.players,
      };
    default:
      return state;
  }
}
