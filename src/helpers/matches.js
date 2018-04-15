import convertString from '~/helpers/string_conversions';
import { hhmmss } from '~/helpers/utils';

export default function (match) {
  match.info = {
    time: match.attributes.createdAt,
    game: convertString(match.attributes.gameMode),
    place: match.stats.winPlace.toString(),
    map: convertString(match.attributes.mapName),
    stats: {
      winPlace: match.stats.winPlace,
      timeSurvived: `${hhmmss(match.stats.timeSurvived)}`,
      kills: match.stats.kills,
      killPlace: match.stats.killPlace,
      damageDealt: `${Math.round(match.stats.damageDealt)} HP`,
      longestKill: `${match.stats.longestKill} M`,
      headshotKills: match.stats.headshotKills,
      teamKills: match.stats.teamKills,
      DBNOs: match.stats.DBNOs,
      assists: match.stats.assists,
      boosts: match.stats.boosts,
      heals: match.stats.heals,
      revives: match.stats.revives,
      rideDistance: `${Math.round(match.stats.rideDistance)} M`,
      walkDistance: `${Math.round(match.stats.walkDistance)} M`,
    },
  };
  return match;
}
