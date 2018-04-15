import { StackNavigator, SwitchNavigator } from 'react-navigation';
import HomeContainer from '~/containers/Home/HomeContainer';
import AppLoadingContainer from '~/containers/AppLoading/AppLoadingContainer';
import AddPlayerContainer from '~/containers/Players/AddPlayerContainer';
import MatchContainer from '~/containers/Matches/MatchContainer';

const AppStack = StackNavigator({
  Home: {
    screen: HomeContainer,
  },
  AddPlayer: {
    screen: AddPlayerContainer,
  },
  ViewMatch: {
    screen: MatchContainer,
  },
});

export default SwitchNavigator(
  {
    Loading: AppLoadingContainer,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);
