import axios from 'axios';
import { PUBG_API_KEY } from 'react-native-dotenv';

const pubgApi = axios.create({
  baseURL: 'https://api.playbattlegrounds.com/shards/pc-na',
  headers: {
    common: {
      Authorization: `Bearer ${PUBG_API_KEY}`,
      Accept: 'application/vnd.api+json',
    },
  },
});


export function fetchPlayers(players) {
  return pubgApi.get(`/players?filter[playerNames]=${players.join(',')}`);
}

export function fetchMatch(matchId) {
  return pubgApi.get(`/matches/${matchId}`);
}

export default {};
