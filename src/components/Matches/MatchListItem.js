import React from 'react';
import { ListItem, Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import { colors } from '~/styles';

const MatchListItem = ({ match, handler, time }) => {
  return (
    match.error !== undefined && !match.processed ?
      <Card containerStyle={{ marginTop: 0 }}><ListItem title={match.error}/></Card> :
      (<Card containerStyle={{ marginTop: 0 }}>
        <ListItem
          title={match.info.game}
          badge={{ value: `Rank: ${match.info.place}`, containerStyle: { backgroundColor: colors.primary } }}
        />
        <ListItem leftIcon={{ name: 'ios-time-outline', type: 'ionicon' }} title={time}/>
        <ListItem leftIcon={{ name: 'md-map', type: 'ionicon' }} title={match.info.map}/>
        <ListItem title="More Info" onPress={() => handler(match.id)} chevron={true}/>
      </Card>)
  );
};

MatchListItem.propTypes = {
  match: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
};

export default MatchListItem;
