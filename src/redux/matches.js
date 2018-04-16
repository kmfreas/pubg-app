import { fetchMatch } from '~/api/pubg';
import formatMatch from '~/helpers/matches';

const ADD_MATCH = 'ADD_MATCH';
const REMOVE_MATCH = 'REMOVE_MATCH';
const MATCH_PROCESSED = 'MATCH_PROCESSED';
const MATCH_FETCH_ERROR = 'MATCH_FETCH_ERROR';

function addMatch({ match, playerName }) {
  return {
    type: ADD_MATCH,
    match,
    playerName,
  };
}

function removeMatches(data) {
  return {
    type: REMOVE_MATCH,
    matches: data,
  };
}

function matchProcessed({ match, playerName }) {
  return {
    type: MATCH_PROCESSED,
    match,
    playerName,
  };
}

function matchFetchError({ match, playerName }) {
  return {
    type: MATCH_FETCH_ERROR,
    match,
    playerName,
  };
}

function processMatch(match, playerName) {
  const stats = match.included.filter((i) => {
    return i.attributes.stats && i.attributes.stats.name === playerName;
  });
  match.stats = stats[0].attributes.stats;
  match.processed = true;
  return formatMatch(match);
}

export function handleAddMatch(matchId, playerName) {
  return (dispatch, getState) => {
    const playerMatches = getState().matches[playerName];
    if (playerMatches && Object.keys(playerMatches).indexOf(matchId) >= 0) {
      return;
    }
    fetchMatch(matchId).then(({ data }) => {
      const { data: { id } } = data;
      const match = {
        ...data.data,
        included: data.included,
        processed: false,
      };
      dispatch(addMatch({
        [id]: match,
        playerName,
      }));
      dispatch(matchProcessed({
        match: { [id]: processMatch(match, playerName) },
        playerName,
      }));
    }).catch((error) => {
      console.log(error, error.response);
      dispatch(matchFetchError({
        match: {
          [matchId]: {
            error: 'Could not load match!',
          },
        },
        playerName,
      }));
    });
  };
}

export function handleRemoveMatchesForPlayer(playerName) {
  return (dispatch, getState) => {
    const { matches: { [playerName]: player, ...newMatches } } = getState();
    dispatch(removeMatches(newMatches));
  };
}

export default function matches(state = {}, action) {
  switch (action.type) {
    case ADD_MATCH:
      return {
        ...state,
        [action.playerName]: {
          ...state[action.playerName],
          ...action.match,
        },
      };
    case REMOVE_MATCH:
      return {
        ...action.matches,
      };
    case MATCH_PROCESSED:
      return {
        ...state,
        [action.playerName]: {
          ...state[action.playerName],
          ...action.match,
        },
      };
    case MATCH_FETCH_ERROR:
      return {
        ...state,
        [action.playerName]: {
          ...state[action.playerName],
          ...action.match,
        },
      };
    default:
      return state;
  }
}
