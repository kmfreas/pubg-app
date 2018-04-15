import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const PlayerListItemHeader = ({ name, handler, collapsed }) => {
  const icon = collapsed ? 'ios-arrow-forward' : 'ios-arrow-down-outline';
  return (
    <ListItem title={name} rightElement={
      <Icon
        name={icon}
        type='ionicon'
        onPress={handler}
      />
    }/>
  );
};

PlayerListItemHeader.propTypes = {
  handler: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default PlayerListItemHeader;
