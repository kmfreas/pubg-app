const strings = {
  warmodetpp: 'War',
  'squad-fpp': 'Squad FPP',
  solo: 'Solo',
  Erangel_Main: 'Erangel',
  Desert_Main: 'Miramar',
  DBNOs: 'Downs',
  assists: 'Assists',
  boosts: 'Boosts',
  damageDealt: 'Damage Dealt',
  headshotKills: 'Headshot Kills',
  heals: 'Heals',
  killPlace: 'Kill Rank',
  kills: 'Kills',
  longestKill: 'Longest Kill',
  revives: 'Revives',
  rideDistance: 'Ride Distance',
  roadKills: 'Road Kills',
  teamKills: 'Team Kills',
  timeSurvived: 'Time Survived',
  walkDistance: 'Walk Distance',
  winPlace: 'Rank',
  duo: 'Duo',
  'duo-fpp': 'Duo FPP',
  squad: 'Squad',
};

export default function convertString(string) {
  return strings[string] ? strings[string] : string;
}
