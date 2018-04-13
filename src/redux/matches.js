import { fetchMatch } from '~/api/pubg';

const ADD_MATCH = 'ADD_MATCH';
const REMOVE_MATCH = 'REMOVE_MATCH';

function addMatch({ matches, playerName }) {
  return {
    type: ADD_MATCH,
    matches,
    playerName,
  };
}

export function handleAddMatch(matchId, playerName) {
  return (dispatch, getState) => {
    fetchMatch(matchId).then(({ data }) => {
      dispatch(addMatch({
        matches: {
          ...getState().matches[playerName],
          [data.data.id]: data.data,
        },
        playerName,
      }));
    }).catch((error) => {
      console.log(error, error.response);
    });
  };
}

export default function matches(state = {}, action) {
  switch (action.type) {
    case ADD_MATCH:
      return {
        ...state,
        [action.playerName]: action.matches,
      };
    case REMOVE_MATCH:
      return {
        ...state,
        ...action.match,
      };
    default:
      return state;
  }
}
