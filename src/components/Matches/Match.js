import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import convertString from '~/helpers/string_conversions';
import moment from 'moment';

const match = ({ match: thisMatch }) => {
  const { info: { stats } } = thisMatch;
  return (
    <ScrollView>
      <Card title={moment(thisMatch.attributes.createdAt).fromNow()}>
        {
          Object.keys(stats).map((stat) => {
            return <ListItem
              key={stat}
              title={convertString(stat)}
              badge={{ value: stats[stat] }}
            />;
          })
        }
      </Card>
    </ScrollView>
  );
};

match.propTypes = {
  match: PropTypes.object.isRequired,
};

export default match;
