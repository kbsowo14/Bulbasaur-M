import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { memo, Suspense } from 'react'
import MainTabs from 'screens/MainTabs'
import Settings from 'screens/Settings'

const Stack = createNativeStackNavigator()

/**
 * @description
 * 메인 네비게이터
 */
const MainNavigator = () => {
	return (
		<Suspense>
			<Stack.Navigator initialRouteName="MainTabs">
				<Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</Suspense>
	)
}

export default memo(MainNavigator)
