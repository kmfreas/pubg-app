import axios from 'axios';
import { PUBG_API_KEY, TRN_API_KEY } from 'react-native-dotenv';

const pubgApi = axios.create({
  baseURL: 'https://api.playbattlegrounds.com/shards/pc-na',
  headers: {
    common: {
      Authorization: `Bearer ${PUBG_API_KEY}`,
      Accept: 'application/vnd.api+json',
    },
  },
});

const trnApi = axios.create({
  baseURL: 'https://api.pubgtracker.com/v2/profile/pc',
  headers: {
    common: {
      'TRN-Api-Key': TRN_API_KEY,
    },
  },
});

export function fetchPlayers(players) {
  console.log(players.join(','));
  return pubgApi.get(`/players?filter[playerNames]=${players.join(',')}`);
}

export function fetchPlayerStats(player) {
  return trnApi.get(`/${player}?region=na`);
}

export function fetchMatch(matchId) {
  return pubgApi.get(`/matches/${matchId}`);
}

export default {};
