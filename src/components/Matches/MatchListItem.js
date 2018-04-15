import React from 'react';
import { ListItem, Card } from 'react-native-elements';
import PropTypes from 'prop-types';

const MatchListItem = ({ match, handler, time }) => {
  return (
    match.error !== undefined && !match.processed ?
      <ListItem title={match.error}/> :
      (<Card>
        <ListItem title={time} badge={{ value: match.info.place }} />
        <ListItem title={match.info.game}/>
        <ListItem leftIcon={{ name: 'map', type: 'FontAwesome' }} title={match.info.map}/>
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
