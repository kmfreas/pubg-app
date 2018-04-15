import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const PlayerManageItem = ({ name, handler }) => {
  return (
    <ListItem title={name} rightElement={
      <Icon
        name="ios-close"
        type="ionicon"
        onPress={handler}
      />
    }/>
  );
};

PlayerManageItem.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default PlayerManageItem;
