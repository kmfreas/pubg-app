import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ImageBackground } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import convertString from '~/helpers/string_conversions';
import styles, { colors } from '~/styles';
import Miramar from '~/images/miramar.jpg';
import Erangel from '~/images/erangel.jpg';

const match = ({ match: thisMatch }) => {
  const { info: { stats } } = thisMatch;
  const images = {
    Miramar,
    Erangel,
  };
  const BackgroundImage = images[thisMatch.info.map];
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <ScrollView>
        <Card containerStyle={{ marginBottom: 15 }}>
          {
            Object.keys(stats).map((stat) => {
              return <ListItem
                key={stat}
                title={convertString(stat)}
                badge={{ value: stats[stat], containerStyle: { backgroundColor: colors.primary } }}
              />;
            })
          }
        </Card>
      </ScrollView>
    </ImageBackground>
  );
};

match.propTypes = {
  match: PropTypes.object.isRequired,
};

export default match;
