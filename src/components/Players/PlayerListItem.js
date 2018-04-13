import React from 'react';
import { Card, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import moment from 'moment';


function PlayerListItem(props) {
  return (
    <Card title={props.player.attributes.name}>
      {
        Object.keys(props.matches).map((key) => {
          const time = moment(props.matches[key].attributes.createdAt).fromNow();
          return <ListItem key={key} title={time}/>;
        })
      }
    </Card>
  );
}

PlayerListItem.propTypes = {
  player: PropTypes.object.isRequired,
  matches: PropTypes.object.isRequired,
};

export default PlayerListItem;
