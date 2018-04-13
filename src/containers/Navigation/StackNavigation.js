import { StackNavigator, SwitchNavigator } from 'react-navigation';
import HomeContainer from '~/containers/Home/HomeContainer';
import AppLoadingContainer from '~/containers/AppLoading/AppLoadingContainer';
import AddPlayerContainer from '~/containers/Players/AddPlayerContainer';

const AppStack = StackNavigator({
  Home: {
    screen: HomeContainer,
  },
  AddPlayer: {
    screen: AddPlayerContainer,
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
