import React from 'react';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

function PlayerListItem(props) {
  return (
    <Card title={props.player.attributes.name}>
      {props.footer}
    </Card>
  );
}

PlayerListItem.propTypes = {
  player: PropTypes.object.isRequired,
  footer: PropTypes.element.isRequired,
};

export default PlayerListItem;
