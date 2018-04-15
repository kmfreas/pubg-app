import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles, { colors } from '~/styles';

const PlayerListItemHeader = ({ name, handler, collapsed }) => {
  const icon = collapsed ? 'ios-arrow-forward' : 'ios-arrow-down-outline';
  return (
    <ListItem
      title={name}
      containerStyle={styles.listItem.header}
      titleStyle={{ color: 'white' }}
      rightElement={
        <Icon
          name={icon}
          type='ionicon'
          onPress={handler}
          color={'white'}
          underlayColor={colors.primary}
        />
      }
    />
  );
};

PlayerListItemHeader.propTypes = {
  handler: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default PlayerListItemHeader;
