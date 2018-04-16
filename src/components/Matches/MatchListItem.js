import React, { Fragment } from 'react';
import { ListItem, Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import { colors } from '~/styles';

const MatchListItem = ({ match, handler, time }) => {
  return (
    <Card containerStyle={{ marginTop: 0, marginBottom: 5 }}>
      { match.error !== undefined && !match.processed ?
        <ListItem title={match.error}/> :
        <Fragment>
          <ListItem
            title={match.info.game}
            badge={{ value: `Rank: ${match.info.place}`, containerStyle: { backgroundColor: colors.primary } }}
          />
          <ListItem leftIcon={{ name: 'ios-time-outline', type: 'ionicon' }} title={time}/>
          <ListItem leftIcon={{ name: 'md-map', type: 'ionicon' }} title={match.info.map}/>
          <ListItem title="More Info" onPress={() => handler(match.id)} chevron={true}/>
        </Fragment>
      }
      </Card>
  );
};

MatchListItem.propTypes = {
  match: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
};

export default MatchListItem;
