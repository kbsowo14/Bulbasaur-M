import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { memo, Suspense } from 'react'
import Home from 'screens/Home'
import Settings from 'screens/Settings'

const Stack = createNativeStackNavigator()

/**
 * @description
 * 메인 네비게이터
 */
const MainNavigator = () => {
	return (
		<Suspense>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</Suspense>
	)
}

export default memo(MainNavigator)
